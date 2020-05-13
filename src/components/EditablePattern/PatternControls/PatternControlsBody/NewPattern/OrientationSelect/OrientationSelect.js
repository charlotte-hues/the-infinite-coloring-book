import React, { useContext, useState } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import OrientationIcons from "../../../PatternControlsInputs/Inputs/ControlIcons/OrientationIcons/OrientationIcons";

const orientations = ["portrait", "landscape", "square"];

const OrientationSelect = props => {
  const { orientation, updateOrientation } = useContext(PatternContext);
  const [activeOrientation, setActiveOrientation] = useState(orientation);

  const updateOrientationHandler = orientation => {
    setActiveOrientation(orientation);
    updateOrientation(orientation);
  };

  const orientationButtons = orientations.map(orientation => {
    const active = activeOrientation === orientation;
    return (
      <li key={orientation}>
        <IconButton
          disabled={active}
          onClick={() => updateOrientationHandler(orientation)}
        >
          <OrientationIcons orientation={orientation} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper label="orientation:">
      <IconsContainer>{orientationButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default OrientationSelect;
