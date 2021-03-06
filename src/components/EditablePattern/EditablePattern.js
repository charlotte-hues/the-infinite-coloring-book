import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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

const EditablePattern = ({
  currentPattern,
  edited,
  patternId,
  activePattern,
  lockMode,
  orientation,
  newPattern,
  imageName,
  columns,
  patternColor,
  complexity,

  onSwitchTile,
  onLockTile
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!edited && !patternId) {
      newPattern(orientation, complexity);
    }
  }, [edited, patternId, newPattern, orientation, complexity]);

  useEffect(() => {
    let mounted = true;
    mounted && setVisible(false);
    setTimeout(() => {
      if (mounted) {
        setVisible(true);
      }
    }, 200);

    return () => (mounted = false);
  }, [orientation]);

  const clickHandler = (i, currentPattern, activePattern) => {
    !lockMode
      ? onSwitchTile(i, currentPattern, activePattern)
      : onLockTile(i, currentPattern);
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
        click={() => clickHandler(i, currentPattern, activePattern)}
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
    patternId: state.currentPattern.id,
    activePattern: state.patternEditing.activePattern,
    lockMode: state.patternEditing.lockMode,
    imageName: state.currentPattern.imageName,
    columns: state.currentPattern.columns,
    complexity: state.currentPattern.complexity,
    patternColor: state.currentPattern.patternColor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newPattern: (orientation, complexity) =>
      dispatch(actions.initPattern(orientation, complexity)),
    onSwitchTile: (index, currentPattern, activePattern) =>
      dispatch(actions.switchTile(index, currentPattern, activePattern)),
    onLockTile: (index, currentPattern) =>
      dispatch(actions.lockTile(index, currentPattern))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditablePattern);
