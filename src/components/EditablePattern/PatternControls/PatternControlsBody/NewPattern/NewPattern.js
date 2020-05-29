import React, { useContext } from "react";
import { DispatchContext } from "../../../../../context/PatternContext/PatternContext";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import TemplateSelect from "./TemplateSelect/TemplateSelect";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => {
  const dispatch = useContext(DispatchContext);

  return (
    <React.Fragment>
      <OrientationSelect />
      <ComplexitySlider />
      <TemplateSelect />
    </React.Fragment>
  );
};

export default NewPattern;
