import React from "react";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
import LabelInput from "./LabelInput/LabelInput";

const Print = props => {
  return (
    <React.Fragment>
      <LabelInput />
      <InputWrapper>
        <Button onClick={() => window.print()}>Print</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Print;
