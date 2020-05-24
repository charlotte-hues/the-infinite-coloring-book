import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import IconButton from "../../../../../UI/Button/IconButton";
import { OnOffSwitch } from "../../../PatternControlsInputs/Inputs/Switch/Switch";

const LockModeSwitch = props => {
  const dispatch = useContext(DispatchContext);
  const { lockMode } = useContext(StateContext);

  const Switch = (
    <IconButton
      onClick={() => dispatch({ type: "SET-LOCK-MODE", active: !lockMode })}
    >
      <OnOffSwitch active={lockMode} />
    </IconButton>
  );

  return <InputWrapper>{Switch}</InputWrapper>;
};

export default LockModeSwitch;
