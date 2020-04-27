import React from "react";
import * as Backgrounds from "./Backgrounds/Backgrounds";
import * as Symmetrical from "./Symmetrical/Symmetrical";
import { SVG } from "./Styles/Styles";

export const allPatterns = { ...Backgrounds, ...Symmetrical };

const patternsArr = [];
for (let pattern in allPatterns) {
  patternsArr.push({ pattern: allPatterns[pattern] });
}

const Pattern = props => {
  const RandPattern = patternsArr[props.num].pattern;
  return (
    <SVG click={props.click} id={props.id} rotation={props.rotation}>
      <RandPattern rotate={props.rotate} />
    </SVG>
  );
};

export default Pattern;
