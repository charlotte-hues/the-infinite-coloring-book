import React, { useContext } from "react";
import { PatternContext } from "../../../../../context/PatternContext";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => {
  const { newPattern, orientation, complexity } = useContext(PatternContext);

  return (
    <React.Fragment>
      <OrientationSelect />
      <ComplexitySlider />
      <Button onClick={() => newPattern(orientation, complexity)}>
        Randomise
      </Button>
    </React.Fragment>
  );
};

export default NewPattern;
