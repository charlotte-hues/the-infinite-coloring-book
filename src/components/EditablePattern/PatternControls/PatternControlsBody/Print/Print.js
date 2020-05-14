import React, { useContext } from "react";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
import { PatternContext } from "../../../../../context/PatternContext/PatternContext";

const Print = props => {
  const { downloadImage } = useContext(PatternContext);
  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={() => window.print()}>Print</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Print;
