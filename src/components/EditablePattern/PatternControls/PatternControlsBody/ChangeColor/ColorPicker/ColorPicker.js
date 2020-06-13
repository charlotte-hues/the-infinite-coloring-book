import React from "react";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import { ColorIconDiv } from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const ColorPicker = ({
  onClick,
  activeColorSelection,
  activeBackgroundColor,
  activePatternColor,
  colorArray
}) => {
  const activeSelection =
    activeColorSelection === "pattern"
      ? activePatternColor
      : activeBackgroundColor;

  const colorButtons = Array.from({
    length: colorArray.length
  }).map((_, i) => {
    let active = activeSelection === i;
    return (
      <li key={i}>
        <IconButton
          onClick={() => onClick(i, colorArray[i], activeColorSelection)}
          active={active}
        >
          <ColorIconDiv color={colorArray[i]} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper>
      <IconsContainer>{colorButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default ColorPicker;
