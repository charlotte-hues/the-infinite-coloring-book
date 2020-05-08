import React from "react";
import { IconButton, IconsContainer } from "../../../UI/Button/IconButton";
import { GroupIcons } from "../PatternControlIconButtons/PatternControlIconButtons";

const groups = ["new", "color", "save", "print"];

const PatternControlsHeader = props => {
  const groupButtons = groups.map(group => {
    const active = props.active === group;
    return (
      <li key={group}>
        <IconButton
          heading
          disabled={active}
          onClick={() => props.onClick(group)}
        >
          <GroupIcons type={group} />
        </IconButton>
      </li>
    );
  });

  return <IconsContainer heading>{groupButtons}</IconsContainer>;
};

export default PatternControlsHeader;
