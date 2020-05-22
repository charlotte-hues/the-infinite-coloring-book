import React, { useContext } from "react";
import { StateContext } from "../../context/PatternContext/PatternContext";
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

console.log(allPatterns);

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
  cursor: ${props =>
    props.locked && !props.lockMode ? "not-allowed" : "pointer"};
  background: ${props =>
    props.locked && props.lockMode ? "rgba(255, 0, 0, 0.3)" : "none"};

  &:hover {
    background: ${props => (props.lockMode ? "rgba(255, 0, 0, 0.3)" : "none")};
  }
`;

const Pattern = props => {
  const { lockMode } = useContext(StateContext);
  const NewPattern = patternsArr[props.num];

  return (
    <SvgWrapper lockMode={lockMode} locked={props.locked} onClick={props.click}>
      <SVG
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
