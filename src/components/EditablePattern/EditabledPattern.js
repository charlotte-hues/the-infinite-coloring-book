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
  padding: 10px;
  margin: auto;
  margin-top: 5vh;
  width: 35vw;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);

  @media only screen and (max-width: 600px) {
    width: 85vw;
  }

  @media only screen and (min-width: 600px) {
    width: 65vw;
  }

  @media only screen and (min-width: 768px) {
    width: 55vw;
  }

  @media only screen and (min-width: 992px) {
    width: 45vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 30vw;
  }

  @media print {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    color: #fff;
    box-shadow: none;

    #header,
    #footer {
      display: none;
    }

    @page {
      margin: 1cm;
    }
  }
`;

const EditablePattern = props => {
  const { columns, patternColor, backgroundColor, label, patterns } = props;

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={patternColor}
        num={pattern.num}
        click={props.switchTile}
      />
    );
  });

  return (
    <PatternWrapper columns={columns} backgroundColor={backgroundColor}>
      {tiledPatterns}
      <PrintName>{label}</PrintName>
    </PatternWrapper>
  );
};

export default EditablePattern;
