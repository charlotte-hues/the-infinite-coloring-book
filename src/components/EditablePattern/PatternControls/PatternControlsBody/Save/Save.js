import React, { useContext } from "react";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
import { PatternContext } from "../../../../../context/PatternContext/PatternContext";

const Save = props => {
  const { downloadImage } = useContext(PatternContext);
  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={downloadImage}>Save as image</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Save;
