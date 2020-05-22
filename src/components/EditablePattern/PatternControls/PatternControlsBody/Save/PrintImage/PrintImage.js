import React from "react";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";

const PrintImage = props => {
  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={() => window.print()}>Print</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default PrintImage;
