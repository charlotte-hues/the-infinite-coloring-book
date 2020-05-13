import React, { useContext } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Slider from "../../../PatternControlsInputs/Inputs/Slider/Slider";

const ComplexitySlider = props => {
  const { updateComplexity, complexity } = useContext(PatternContext);

  const updateComplexityHandler = e => {
    updateComplexity(e.target.value);
  };

  return (
    <InputWrapper label="size:">
      <Slider
        min={0}
        max={2}
        value={complexity}
        onInput={updateComplexityHandler}
      />
    </InputWrapper>
  );
};

export default ComplexitySlider;
