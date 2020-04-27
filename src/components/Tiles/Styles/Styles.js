import React from "react";
import styled, { css } from "styled-components";

//Should maybe be global styles
const sharedStyles = css`
  stroke-width: 2;
  width: auto;
  height: auto;
  padding: 0;
  display: inline-block;
  stroke: orange;
  fill: none;
`;

const corner = {
  tR: "0deg",
  bR: "90deg",
  bL: "180deg",
  tL: "270deg"
};

export const StyledSVG = styled.svg`
  ${sharedStyles};
  transform: rotate(
    ${props => (props.rotation ? corner[props.rotation] : "0deg")}
  );
  position: relative;
`;

const SvgButton = styled.rect`
  width: 100%;
  height: 100%;
  fill: #fff;
  fill-opacity: 0;
  stroke: #fff;
  stroke-opacity: 0;
`;

export const SVG = props => (
  <StyledSVG viewBox="0 0 40 40" rotation={props.rotation}>
    {props.children}
    <SvgButton onClick={props.click} id={props.id} />
  </StyledSVG>
);

export const DiagonalPath = styled.path`
  stroke-width: 1.5;
  stroke-linecap: square;
`;
