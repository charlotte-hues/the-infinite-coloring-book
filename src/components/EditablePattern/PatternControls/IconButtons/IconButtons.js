import React from "react";
import styled, { css } from "styled-components";
import {
  PortraitIcon,
  LandscapeIcon,
  SquareIcon
} from "./OrientationIcons/OrientationIcons";

const sharedStyles = css`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 2;
  stroke: ${props => (props.active ? "var(--orange)" : "var(--trim)")};
`;

const OrientationIconStyle = css`
  & path:last-of-type {
    stroke: none;
    fill: ${props => (props.active ? "var(--orange)" : "var(--trim)")};
  }
`;

const OrientationSVG = styled.svg`
  ${sharedStyles}
  ${OrientationIconStyle}
`;

export const OrientationIcons = props => {
  let OrientationIcon = PortraitIcon;
  if (props.orientation === "landscape") OrientationIcon = LandscapeIcon;
  if (props.orientation === "square") OrientationIcon = SquareIcon;

  return (
    <OrientationSVG
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      active={props.active}
    >
      {OrientationIcon}
    </OrientationSVG>
  );
};
