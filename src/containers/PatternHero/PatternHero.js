import React from "react";
import * as Corner from "../../components/Patterns/Corners/Corners";
import * as Gems from "../../components/Patterns/Gems/Gems";
import * as All from "../../components//Patterns/AllSidePatterns/AllSidePatterns";
import styled from "styled-components";

const PatternWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid: auto-flow / repeat(6, 1fr);

  @media only screen and (max-width: 600px) {
    grid: auto-flow / repeat(4, 1fr);
  }

  @media only screen and (min-width: 600px) {
    grid: auto-flow / repeat(4, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid: auto-flow / repeat(6, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid: auto-flow / repeat(8, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid: auto-flow / repeat(10, 1fr);
  }
`;

const initialState = [
  {
    type: "corner",
    rotation: "tL",
    currentModule: Corner.Curved
  },
  { type: "all", rotation: "tR", currentModule: All.Diagonal },
  { type: "all", rotation: "tR", currentModule: All.CrossGrid },
  { type: "all", rotation: "tR", currentModule: All.Circles },
  {
    type: "gem",
    rotation: "tL",
    currentModule: All.Diagonal,
    children: Gems.Diamond
  },
  { type: "all", rotation: "tL", currentModule: All.CrossGrid },
  { type: "all", rotation: "tR", currentModule: All.Diagonal },
  { type: "all", rotation: "tR", currentModule: All.Diagonal },
  { type: "all", rotation: "tR", currentModule: All.Diagonal },
  { type: "all", rotation: "tR", currentModule: All.Diagonal },
  { type: "all", rotation: "tR", currentModule: All.Diagonal }
];

const PatternHero = props => {
  const Patterns = initialState.map((pattern, i) => {
    console.log(pattern.type);
    return (
      <pattern.currentModule
        id={i}
        type={pattern.type}
        rotate={pattern.rotation}
        key={i}
      >
        {pattern.children !== undefined ? <pattern.children /> : null}
      </pattern.currentModule>
    );
  });

  return (
    <PatternWrapper>
      {Patterns}
      {/* <All.Circles />
      <All.CrossGrid>
        <Gems.Letter>A</Gems.Letter>
      </All.CrossGrid>
      <All.CrossGrid>
        <Gems.Diamond />
      </All.CrossGrid>
      <All.Square />
      <All.Diagonal rotate="tR">
        <Gems.Diamond />
      </All.Diagonal>
      <Corner.Curved rotate="tR" background />
      <Corner.Square rotate="tR" background />
      <All.Diagonal /> */}
    </PatternWrapper>
  );
};

export default PatternHero;
