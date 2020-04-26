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

export const SVG = styled.svg`
  ${sharedStyles};
  transform: rotate(${props => (props.rotate ? corner[props.rotate] : "0deg")});
`;

export const DiagonalPath = styled.path`
  stroke-width: 1.5;
  stroke-linecap: square;
`;
