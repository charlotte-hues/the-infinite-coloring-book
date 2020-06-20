import React from "react";
import styled, { css } from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import {
  PortraitIcon,
  LandscapeIcon,
  SquareIcon
} from "./OrientationIconElements/OrientationIconElements";

const OrientationIconStyle = css`
  stroke: ${props => (props.active ? "var(--orange)" : "var(--dark)")};
  & path:last-of-type {
    stroke: none;
    fill: ${props => (props.active ? "var(--orange)" : "var(--dark)")};
  }
`;

const OrientationSVG = styled.svg.attrs({
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg"
})`
  ${sharedSvgStyles}
  ${OrientationIconStyle}
`;

export const OrientationIcons = props => {
  let OrientationIcon = PortraitIcon;
  if (props.orientation === "landscape") OrientationIcon = LandscapeIcon;
  if (props.orientation === "square") OrientationIcon = SquareIcon;

  return (
    <OrientationSVG active={props.active}>{OrientationIcon}</OrientationSVG>
  );
};

export default OrientationIcons;
