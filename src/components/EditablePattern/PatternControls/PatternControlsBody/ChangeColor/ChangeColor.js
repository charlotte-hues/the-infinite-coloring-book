import React from "react";
import ActiveColorSelection from "./ActiveColorSelection/ActiveColorSelection";
import ColorPicker from "./ColorPicker/ColorPicker";

const ChangeColor = props => {
  return (
    <React.Fragment>
      <ActiveColorSelection />
      <ColorPicker />
    </React.Fragment>
  );
};

export default ChangeColor;
