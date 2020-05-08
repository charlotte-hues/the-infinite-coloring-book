import React from "react";
import styled, { css } from "styled-components";
import {
  PortraitIcon,
  LandscapeIcon,
  SquareIcon
} from "./OrientationIcons/OrientationIcons";
import * as Group from "./Group Icons/GroupIcons";

const sharedStyles = css`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 2;
`;

const OrientationIconStyle = css`
  stroke: ${props => (props.active ? "var(--orange)" : "var(--trim)")};
  & path:last-of-type {
    stroke: none;
    fill: ${props => (props.active ? "var(--orange)" : "var(--trim)")};
  }
`;

const SVG = styled.svg`
  stroke: var(--black);
  ${sharedStyles}
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

export const GroupIcons = props => {
  let GroupIcon;
  switch (props.type) {
    case "new":
      GroupIcon = Group.NewIcon;
      break;
    case "color":
      GroupIcon = <Group.ColourIcon />;
      break;
    case "save":
      GroupIcon = Group.SaveIcon;
      break;
    case "print":
      GroupIcon = Group.PrintIcon;
      break;
    default:
      GroupIcon = null;
  }

  return (
    <SVG
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      active={props.active}
    >
      {GroupIcon}
    </SVG>
  );
};
