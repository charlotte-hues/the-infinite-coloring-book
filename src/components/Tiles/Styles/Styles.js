import React from "react";
import styled, { css } from "styled-components";

//Should maybe be global styles
const sharedStyles = css`
  stroke-width: 1;
  width: auto;
  height: auto;
  padding: 0;
  display: inline-block;

  fill: none;
`;

export const StyledSVG = styled.svg`
  ${sharedStyles};
  stroke: ${props => (props.patternColor ? props.patternColor : "orange")};
  position: absolute;
  top: 0;
  left: 0;
`;

const SvgButton = styled.rect`
  width: 100%;
  height: 100%;
  fill: #fff;
  fill-opacity: 0;
  stroke: #fff;
  stroke-opacity: 0;
`;

export const RotationGroup = styled.g`
  transform-origin: 50% 50%;
  transform: rotate(${props => (props.rotate ? props.rotate : "0deg")});
`;

export const SVG = props => {
  return (
    <StyledSVG
      viewBox="0 0 40 40"
      patternColor={props.patternColor}
      fill="none"
      strokeWidth="1"
      stroke={props.patternColor}
      width="100%"
      height="100%"
    >
      {props.children}
      <SvgButton onClick={props.click} id={props.id} name={props.name} />
    </StyledSVG>
  );
};

export const DiagonalPath = styled.path`
  stroke-width: 1;
  strokelinecap: square;
`;
