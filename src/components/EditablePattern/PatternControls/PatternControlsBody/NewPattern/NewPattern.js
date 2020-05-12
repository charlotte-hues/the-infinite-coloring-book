import React, { useContext } from "react";
import { PatternContext } from "../../../../../context/PatternContext";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import FormControlWrapper from "../FormControls/FormControlWrapper/FormControlWrapper";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => {
  const { newPattern, orientation, complexity } = useContext(PatternContext);

  return (
    <React.Fragment>
      <OrientationSelect />
      <ComplexitySlider />
      <FormControlWrapper>
        <Button onClick={() => newPattern(orientation, complexity)}>
          Randomise
        </Button>
      </FormControlWrapper>
    </React.Fragment>
  );
};

export default NewPattern;
