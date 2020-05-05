import React, { useContext, useState } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import SingleLineInput from "../../SingleLineInput/SingleLineInput";
import Slider from "../../../../../UI/FormControls/Slider/Slider";

const ComplexitySlider = props => {
  const [complexityValue, setComplexityValue] = useState(0);
  const { updateComplexity } = useContext(PatternContext);

  const updateComplexityHandler = e => {
    setComplexityValue(e.target.value);
    updateComplexity(e.target.value);
  };

  return (
    <SingleLineInput label="size:">
      <Slider
        min={0}
        max={2}
        value={complexityValue}
        onInput={updateComplexityHandler}
      />
    </SingleLineInput>
  );
};

export default ComplexitySlider;
