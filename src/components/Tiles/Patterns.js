import React from "react";
import * as Backgrounds from "./Backgrounds/Backgrounds";
import * as Symmetrical from "./Symmetrical/Symmetrical";

export const Diagonal = props => <Backgrounds.Diagonal />;

export const allPatterns = { ...Backgrounds, ...Symmetrical };

const patternsArr = [];
for (let pattern in allPatterns) {
  patternsArr.push(pattern);
}
console.log(allPatterns);

const Pattern = props => {
  const pattern = patternsArr[props];

  return allPatterns.BoxCross();
};

export default Pattern;
