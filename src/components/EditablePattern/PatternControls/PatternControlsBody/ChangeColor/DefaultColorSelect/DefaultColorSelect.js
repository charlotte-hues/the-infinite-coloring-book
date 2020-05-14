import React, { useContext } from "react";
import styled from "styled-components";
import { PatternContext } from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import ColorIcon from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const defaultColors = [
  ["#E1DBD2", "#F7F3EE"],
  ["#C74F33", "#F7F3EE"],
  ["#2F544E", "#F7F3EE"],
  ["black", "#F7F3EE"]
];

const Picker = styled.input`
  border: 2px solid #e1dbd2;
  height: 34px;
  width: 34px;
  background: none;
  border-radius: 2px;
  padding: 0 1px;
`;

const DefaultColorSelect = props => {
  const { updatePatternColor, patternColor } = useContext(PatternContext);

  const colorButtons = defaultColors.map(color => {
    console.log(color);
    let active = color[0] === patternColor;
    return (
      <li key={color}>
        <IconButton
          onClick={() => updatePatternColor(color[0])}
          active={active}
        >
          <ColorIcon pattern={color[0]} background={color[1]} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper label="print friendly:">
      <IconsContainer>{colorButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default DefaultColorSelect;
