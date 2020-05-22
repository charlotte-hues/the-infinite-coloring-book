import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import { ActiveSelectionSwitch } from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const ActiveColorSelection = props => {
  const dispatch = useContext(DispatchContext);
  const { activeColorSelection, backgroundColor } = useContext(StateContext);

  const Switch = (
    <IconButton
      heading
      onClick={() =>
        dispatch({
          type: "UPDATE-ACTIVE-COLOR-SELECTION",
          selection:
            activeColorSelection === "pattern" ? "background" : "pattern"
        })
      }
    >
      <ActiveSelectionSwitch
        active={activeColorSelection}
        background={backgroundColor}
      />
    </IconButton>
  );

  return <InputWrapper>{Switch}</InputWrapper>;
};

export default ActiveColorSelection;
