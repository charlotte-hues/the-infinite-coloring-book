import React from "react";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Input from "../../../../../UI/Input/Input";

const NameImage = props => {
  return (
    <InputWrapper label="name:">
      <Input
        type="text"
        name="imageName"
        maxlength="30"
        value={props.value}
        onChange={e => props.update(e.target.value)}
      />
    </InputWrapper>
  );
};

export default NameImage;
