import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import * as Group from "./GroupIconElements/GroupIconElements";

const GroupSVG = styled.svg`
  stroke: var(--black);
  ${sharedSvgStyles}
`;

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
    case "tilePicker":
      GroupIcon = Group.PatternIcon;
      break;
    case "lockMode":
      GroupIcon = <Group.LockIcon />;
      break;
    default:
      GroupIcon = null;
  }

  return (
    <GroupSVG
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      active={props.active}
    >
      {GroupIcon}
    </GroupSVG>
  );
};

export default GroupIcons;
