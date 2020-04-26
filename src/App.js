import React from "react";
import "./App.css";
import * as Corner from "./components/Patterns/Corners/Corners";
import * as Gems from "./components/Patterns/Gems/Gems";
import {
  Circles,
  Diagonal,
  CrossGrid,
  Square,
  Gem
} from "./components//Patterns/AllSidePatterns/AllSidePatterns";
import styled from "styled-components";

const PatternWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

function App() {
  return (
    <PatternWrapper>
      <Circles />
      <CrossGrid />
      <Square />
      <Diagonal>
        <Gems.Diamond />
      </Diagonal>
      <CrossGrid />
      <Corner.Curved rotate="tR" background />
      <Corner.Square rotate="tR" background />
      Hues Basic Template
    </PatternWrapper>
  );
}

export default App;
