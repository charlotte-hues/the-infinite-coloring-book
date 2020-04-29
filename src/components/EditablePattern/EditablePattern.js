import React from "react";
import styled from "styled-components";
import Pattern from "../Tiles/Tiles";

const PrintName = styled.footer`
  display: none;
  @media print {
    display: block;
    color: grey;
    bottom: 0;
    text-align: left;
  }
`;

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  @media screen and (max-device-width: 480px) {
    width: 85%;
  }
`;

const EditablePattern = props => {
  const { columns, patternColor, label, patterns, switchTile } = props;

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={patternColor}
        num={pattern.num}
        click={switchTile}
      />
    );
  });

  return (
    <PatternWrapper columns={columns}>
      {tiledPatterns}
      <PrintName>{label}</PrintName>
    </PatternWrapper>
  );
};

export default EditablePattern;
