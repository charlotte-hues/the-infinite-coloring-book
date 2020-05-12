import React, { useContext } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import SingleLineInput from "../../Inputs/SingleLineInput/SingleLineInput";
import Slider from "../../FormControls/Slider/Slider";

const ComplexitySlider = props => {
  const { updateComplexity, complexity } = useContext(PatternContext);

  const updateComplexityHandler = e => {
    updateComplexity(e.target.value);
  };

  return (
    <SingleLineInput label="size:">
      <Slider
        min={0}
        max={2}
        value={complexity}
        onInput={updateComplexityHandler}
      />
    </SingleLineInput>
  );
};

export default ComplexitySlider;
