import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Input from "../../../../../UI/Input/Input";

const LabelInput = props => {
  const dispatch = useContext(DispatchContext);
  const { imageName } = useContext(StateContext);

  return (
    <InputWrapper label="imageName:">
      <Input
        type="text"
        name="imageName"
        value={imageName}
        onChange={e =>
          dispatch({ type: "UPDATE-IMAGE-NAME", newImageName: e.target.value })
        }
      />
    </InputWrapper>
  );
};

export default LabelInput;
