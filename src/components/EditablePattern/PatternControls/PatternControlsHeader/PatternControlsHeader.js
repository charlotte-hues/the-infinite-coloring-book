import React from "react";
import IconButton from "../../../UI/Button/IconButton";
import IconsHeadContainer from "../PatternControlsInputs/InputWrapper/IconContainers/IconsHeadContainer";
import GroupIcons from "../PatternControlsInputs/Inputs/ControlIcons/GroupIcons/GroupIcons";

const groups = ["new", "color", "tilePicker", "lockMode", "save"];

const PatternControlsHeader = React.forwardRef((props, ref) => {
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
    <IconsHeadContainer ref={ref} open={props.open}>
      {groupButtons}
    </IconsHeadContainer>
  );
});

export default PatternControlsHeader;
