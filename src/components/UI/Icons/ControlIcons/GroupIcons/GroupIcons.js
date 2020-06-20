import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import * as Group from "./GroupIconElements/GroupIconElements";

const GroupSVG = styled.svg.attrs({
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
})`
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
      GroupIcon = <Group.PatternIcon activePattern={props.activePattern} />;
      break;
    case "lockMode":
      GroupIcon = <Group.LockIcon pattern={props.pattern} />;
      break;
    default:
      GroupIcon = null;
  }

  return <GroupSVG active={props.active}>{GroupIcon}</GroupSVG>;
};

const mapStateToProps = state => {
  return {
    pattern: state.currentPattern.pattern,
    activePattern: state.patternEditing.activePattern
  };
};
export default connect(mapStateToProps)(GroupIcons);
