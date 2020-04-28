import React from "react";
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

const Pattern = props => {
  const NewPattern = patternsArr[props.num];
  return (
    <SVG
      click={props.click}
      id={props.id}
      rotation={props.rotation}
      name={patternsArr[props.num].name}
      patternColor={props.patternColor}
    >
      <NewPattern />
    </SVG>
  );
};

export default Pattern;
