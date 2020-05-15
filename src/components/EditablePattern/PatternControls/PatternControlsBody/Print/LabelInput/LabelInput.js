import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Input from "../../../../../UI/Input/Input";

const LabelInput = props => {
  const dispatch = useContext(DispatchContext);
  const { label } = useContext(StateContext);

  return (
    <InputWrapper label="label:">
      <Input
        type="text"
        name="label"
        value={label}
        onChange={e =>
          dispatch({ type: "UPDATE-LABEL", newLabel: e.target.value })
        }
      />
    </InputWrapper>
  );
};

export default LabelInput;
