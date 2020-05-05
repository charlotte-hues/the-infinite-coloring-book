import React, { useContext } from "react";
import { PatternContext } from "../../context/PatternContext";
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
  const { patterns, columns, switchTile, patternColor, label } = useContext(
    PatternContext
  );

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={patternColor}
        num={patterns[i]}
        click={() => switchTile(i)}
      />
    );
  });

  return (
    <PatternWrapper columns={columns}>
      {tiledPatterns}
      <PrintName color={patternColor}>{label}</PrintName>
    </PatternWrapper>
  );
};

export default EditablePattern;
