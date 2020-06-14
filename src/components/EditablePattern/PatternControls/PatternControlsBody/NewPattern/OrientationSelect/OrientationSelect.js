import React from "react";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import OrientationIcons from "../../../PatternControlsInputs/Inputs/ControlIcons/OrientationIcons/OrientationIcons";

const orientations = ["portrait", "landscape", "square"];

const OrientationSelect = ({ complexity, orientation, onUpdate }) => {
  const orientationButtons = orientations.map(ori => {
    const active = orientation === ori;
    return (
      <li key={ori}>
        <IconButton disabled={active} onClick={() => onUpdate(ori, complexity)}>
          <OrientationIcons orientation={ori} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper label="orientation:">
      <IconsContainer evenlySpaced>{orientationButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default OrientationSelect;
