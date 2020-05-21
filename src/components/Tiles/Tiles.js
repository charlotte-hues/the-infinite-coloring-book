import React from "react";
import styled from "styled-components";
import * as Diagonal from "./Diagonal/Diagonal";
import * as Square from "./Square/Square";
import * as Corners from "./Corners/Corners";
import * as Objects from "./Objects/Objects";
import * as Cutouts from "./Cutouts/Cutouts";
import * as Straights from "./Straights/Straights";
import { SVG } from "./Styles/Styles";

export const allPatterns = {
  ...Diagonal,
  ...Square,
  ...Objects,
  ...Corners,
  ...Straights,
  ...Cutouts
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
