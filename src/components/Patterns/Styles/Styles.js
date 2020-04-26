import styled, { css } from "styled-components";

const stroke = css`
  stroke-width: 2;
  stroke: orange;
  fill: none;
`;

const sharedStyles = css`
  width: 80px;
  height: 80px;
  padding: 0;
  display: inline-block;
`;

const corner = {
  tR: "0deg",
  bR: "90deg",
  bL: "180deg",
  tL: "270deg"
};

export const SVG = styled.svg`
  ${sharedStyles};
  ${props => (props.noStroke ? null : stroke)};
  transform: rotate(${props => (props.rotate ? corner[props.rotate] : "0deg")});
`;

export const DiagonalPath = styled.path`
  stroke-width: 1.5;
  stroke-linecap: square;
  stroke: orange;
  fill: none;
`;
