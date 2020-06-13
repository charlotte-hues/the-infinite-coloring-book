import React, { useContext } from "react";
import { StateContext } from "../../context/PatternContext/PatternContext";
import { isFunction } from "../../shared/utility";
import styled from "styled-components";
import * as Diagonal from "./Diagonal/Diagonal";
import * as Square from "./Square/Square";
import * as Corners from "./Corners/Corners";
import * as Objects from "./Objects/Objects";
import * as Straights from "./Straights/Straights";
import { SVG } from "./Styles/Styles";

const pushParent = (obj, name) => {
  let newObj = { ...obj };
  for (let key in newObj) {
    Object.defineProperty(
      newObj,
      name + key,
      Object.getOwnPropertyDescriptor(newObj, key)
    );
    delete newObj[key];
  }
  return newObj;
};

export const allPatterns = {
  ...pushParent(Diagonal, "DIAGONAL"),
  ...pushParent(Square, "SQUARE"),
  ...pushParent(Objects, "OBJECT"),
  ...pushParent(Corners, "CORNER"),
  ...pushParent(Straights, "STRAIGHT")
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
  cursor: ${props =>
    props.locked && !props.lockMode ? "not-allowed" : "pointer"};
  background: ${props =>
    props.locked && props.lockMode ? "rgba(255, 0, 0, 0.3)" : "none"};

  @media not all and (pointer: coarse) {
    &:hover {
      background: ${props =>
        props.lockMode && props.locked
          ? "rgba(255, 0, 0, 0.15)"
          : props.lockMode
          ? "rgba(255, 0, 0, 0.3)"
          : "none"};
    }
  }
`;

const Pattern = props => {
  const { lockMode } = props;
  const NewPattern = patternsArr[props.num];

  const switchTileHandler = (e, switchFunc) => {
    if (!isFunction(switchFunc)) return;
    if (e.buttons === 1) switchFunc();
  };

  return (
    <SvgWrapper
      lockMode={lockMode}
      locked={props.locked}
      onMouseOver={e => switchTileHandler(e, props.click)}
      onMouseDown={props.click}
    >
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
