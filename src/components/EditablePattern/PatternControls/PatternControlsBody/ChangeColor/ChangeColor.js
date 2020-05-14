import React from "react";
import DefaultColorSelect from "./DefaultColorSelect/DefaultColorSelect";
import CustomColorSelect from "./CustomColorSelect/CustomColorSelect";

const ChangeColor = props => {
  return (
    <React.Fragment>
      <DefaultColorSelect />
      <CustomColorSelect />
    </React.Fragment>
  );
};

export default ChangeColor;
