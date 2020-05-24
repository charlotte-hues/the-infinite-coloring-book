import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import { PatternActiveSwitch } from "../../../PatternControlsInputs/Inputs/Switch/Switch";
import IconButton from "../../../../../UI/Button/IconButton";
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
      <PatternActiveSwitch
        active={activeColorSelection === "pattern"}
        background={backgroundColor}
      />
    </IconButton>
  );

  return <InputWrapper>{Switch}</InputWrapper>;
};

export default ActiveColorSelection;
