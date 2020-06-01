import React from "react";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import TemplateSelect from "./TemplateSelect/TemplateSelect";

const NewPattern = props => {
  return (
    <React.Fragment>
      <TemplateSelect />
      <OrientationSelect />
      <ComplexitySlider />
    </React.Fragment>
  );
};

export default NewPattern;
