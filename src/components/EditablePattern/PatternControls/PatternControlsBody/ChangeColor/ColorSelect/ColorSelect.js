import React, { useContext } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import ColorIcon from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const colors = [
  "#F0EAE1",
  "#E1DBD2",
  "#989391",
  "#483E3B",
  "black",
  "#C74F33",
  "#2F544E",
  "#182B70",
  "#9A1003",
  "#7A527A"
];

const ColorSelect = props => {
  const { updateColor, patternColor } = useContext(PatternContext);

  const colorButtons = colors.map(color => {
    let active = color === patternColor;
    return (
      <li key={color}>
        <IconButton onClick={() => updateColor(color)} active={active}>
          <ColorIcon fill={color} active={active} />
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

export default ColorSelect;
