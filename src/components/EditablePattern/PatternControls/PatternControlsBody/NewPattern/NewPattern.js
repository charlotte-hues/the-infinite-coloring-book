import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../context/PatternContext/PatternContext";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => {
  const { newPattern } = useContext(DispatchContext);
  const { orientation, complexity } = useContext(StateContext);

  return (
    <React.Fragment>
      <OrientationSelect />
      <ComplexitySlider />
      <InputWrapper>
        <Button onClick={() => newPattern(orientation, complexity)}>
          Randomise
        </Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default NewPattern;
