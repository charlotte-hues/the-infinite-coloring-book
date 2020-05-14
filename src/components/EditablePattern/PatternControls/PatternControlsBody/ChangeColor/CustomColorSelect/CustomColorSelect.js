import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
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

const DefaultColorSelect = props => {
  const { updatePatternColor } = useContext(DispatchContext);
  const { patternColor } = useContext(StateContext);

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
    <InputWrapper label="custom:">
      <IconsContainer>{colorButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default DefaultColorSelect;
