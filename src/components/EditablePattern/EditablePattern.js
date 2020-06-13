import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { StateContext } from "../../context/PatternContext/PatternContext";
import styled from "styled-components";
import Pattern from "../Tiles/Tiles";
import * as actions from "../../store/actions/index";

const PrintName = styled.footer`
  display: none;
  @media print {
    display: block;
    position: absolute;
    color: ${props => (props.color ? props.color : "grey")};
    text-align: left;
    bottom: 0;
  }
`;

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: auto;
  width: auto;
  background-color: none;
  opacity: ${props => (props.visible ? 1 : 0)};
  animation: ${props => (props.visible ? "in 0.5s ease-in" : null)};

  @keyframes in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EditablePattern = props => {
  const { imageName, columns, patternColor } = useContext(StateContext);
  const {
    currentPattern,
    edited,
    patternId,
    activePattern,
    lockMode,
    orientation
  } = props;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!edited && !patternId) {
      props.newPattern();
    }
  }, [edited, patternId]);

  useEffect(() => {
    setVisible(false);
    fadeInAfterChange();
  }, [orientation]);

  const fadeInAfterChange = () => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  };

  const clickHandler = (i, locked) => {
    !lockMode
      ? props.onSwitchTile(i, currentPattern, activePattern)
      : props.onLockTile(i, currentPattern);
  };

  const tiledPatterns = currentPattern.map((pattern, i) => {
    return (
      <Pattern
        lockMode={lockMode}
        key={i}
        id={i}
        patternColor={!lockMode ? patternColor : "red"}
        num={currentPattern[i].num}
        locked={currentPattern[i].locked}
        click={() => clickHandler(i, currentPattern[i].locked)}
      />
    );
  });

  return (
    <React.Fragment>
      <PatternWrapper visible={visible} columns={columns}>
        {tiledPatterns}
      </PatternWrapper>
      <PrintName color={patternColor}>{imageName}</PrintName>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentPattern: state.currentPattern.pattern,
    edited: state.currentPattern.edited,
    patternId: state.currentPattern.patternId,
    activePattern: state.patternEditing.activePattern,
    lockMode: state.patternEditing.lockMode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newPattern: () => dispatch(actions.initPattern()),
    onSwitchTile: (index, currentPattern, activePattern) =>
      dispatch(actions.switchTile(index, currentPattern, activePattern)),
    onLockTile: (index, currentPattern) =>
      dispatch(actions.lockTile(index, currentPattern))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditablePattern);
