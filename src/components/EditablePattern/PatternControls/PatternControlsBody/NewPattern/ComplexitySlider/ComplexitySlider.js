import React from "react";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Slider from "../../../PatternControlsInputs/Inputs/Slider/Slider";

const ComplexitySlider = ({ complexity, orientation, onUpdate }) => {
  const updateComplexityHandler = e => {
    onUpdate(e.target.value, orientation);
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
