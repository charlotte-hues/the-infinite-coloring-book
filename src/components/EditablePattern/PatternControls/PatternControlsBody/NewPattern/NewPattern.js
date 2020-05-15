import React, { useContext } from "react";
import { DispatchContext } from "../../../../../context/PatternContext/PatternContext";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => {
  const dispatch = useContext(DispatchContext);

  return (
    <React.Fragment>
      <OrientationSelect />
      <ComplexitySlider />
      <InputWrapper>
        <Button onClick={() => dispatch({ type: "NEW-PATTERN" })}>
          Randomise
        </Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default NewPattern;
