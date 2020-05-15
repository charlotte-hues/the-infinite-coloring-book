import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Slider from "../../../PatternControlsInputs/Inputs/Slider/Slider";

const ComplexitySlider = props => {
  const { complexity } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const updateComplexityHandler = e => {
    dispatch({ type: "UPDATE-COMPLEXITY", newComplexity: e.target.value });
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
