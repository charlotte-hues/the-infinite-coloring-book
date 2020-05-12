import React from "react";
import { IconButton, IconsHeadContainer } from "../../../UI/Button/IconButton";
import { GroupIcons } from "../PatternControlIconButtons/PatternControlIconButtons";

const groups = ["new", "color", "save", "print"];

const PatternControlsHeader = props => {
  const groupButtons = groups.map(group => {
    const active = props.active === group && props.open;
    return (
      <li key={group}>
        <IconButton
          heading={props.open}
          disabled={active}
          onClick={() => props.onClick(group)}
        >
          <GroupIcons type={group} />
        </IconButton>
      </li>
    );
  });

  return (
    <IconsHeadContainer open={props.open}>{groupButtons}</IconsHeadContainer>
  );
};

export default PatternControlsHeader;
