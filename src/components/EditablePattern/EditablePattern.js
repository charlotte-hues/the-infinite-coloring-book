import React, { useContext, useEffect, useState } from "react";
import {
  StateContext,
  DispatchContext
} from "../../context/PatternContext/PatternContext";
import styled from "styled-components";
import Pattern from "../Tiles/Tiles";

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
  const dispatch = useContext(DispatchContext);
  const { imageName, columns, patterns, patternColor, lockMode } = useContext(
    StateContext
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    fadeInAfterChange();
  }, [props.orientation]);

  const fadeInAfterChange = () => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  };

  const clickHandler = (i, locked) => {
    !lockMode
      ? dispatch({ type: "SWITCH-TILE", index: i })
      : dispatch({ type: "LOCK-TILE", index: i, locked: locked });
  };

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={!lockMode ? patternColor : "red"}
        num={patterns[i].num}
        locked={patterns[i].locked}
        click={() => clickHandler(i, patterns[i].locked)}
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

export default EditablePattern;
