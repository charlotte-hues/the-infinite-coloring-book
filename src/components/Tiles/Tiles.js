import React from "react";
import styled from "styled-components";
import * as Backgrounds from "./Backgrounds/Backgrounds";
import * as Symmetrical from "./Symmetrical/Symmetrical";
import * as Circular from "./Circular/Circular";
import * as Corners from "./Corners/Corners";
import * as Objects from "./Objects/Objects";
import { SVG } from "./Styles/Styles";

export const allPatterns = {
  ...Backgrounds,
  ...Symmetrical,
  ...Objects,
  ...Circular,
  ...Corners
};

const patternsArr = [];
for (let pattern in allPatterns) {
  patternsArr.push(allPatterns[pattern]);
}

const SvgWrapper = styled.div`
  display: block;
  width: auto;
  height: auto;
  padding-top: 100%;
  position: relative;
  cursor: pointer;
`;

const Pattern = props => {
  const NewPattern = patternsArr[props.num];
  return (
    <SvgWrapper>
      <SVG
        click={props.click}
        id={props.id}
        rotation={props.rotation}
        name={patternsArr[props.num].name}
        patternColor={props.patternColor}
      >
        <NewPattern />
      </SVG>
    </SvgWrapper>
  );
};

export default Pattern;
