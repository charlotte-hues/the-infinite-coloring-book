import React from "react";
import styled from "styled-components";
import Pattern from "../Tiles/Tiles";

const PrintName = styled.footer`
  display: none;
  @media print {
    display: block;
    color: ${props => (props.color ? props.color : "grey")};
    text-align: left;
    margin-top: 10px;
  }
`;

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: auto;
  width: auto;
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
      <PrintName color={props.patternColor}>{label}</PrintName>
    </PatternWrapper>
  );
};

export default EditablePattern;
