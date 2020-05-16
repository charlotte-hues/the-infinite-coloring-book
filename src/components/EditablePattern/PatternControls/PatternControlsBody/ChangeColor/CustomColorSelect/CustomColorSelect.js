import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import colors from "../../../../../../context/PatternContext/DefaultValues/Colors/Colors";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import ColorIcon from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const CustomColorSelect = props => {
  const dispatch = useContext(DispatchContext);
  const { activeColorGroup, activeColor } = useContext(StateContext);

  const colorButtons = Array.from({
    length: colors.custom.length
  }).map((_, i) => {
    let active = activeColorGroup === "custom" && activeColor === i;

    return (
      <li key={i}>
        <IconButton
          onClick={() =>
            dispatch({
              type: "UPDATE-COLOR",
              colorGroup: "custom",
              index: i
            })
          }
          active={active}
        >
          <ColorIcon
            pattern={colors.custom[i][0]}
            background={colors.custom[i][1]}
            active={active}
          />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper label="inverted:">
      <IconsContainer>{colorButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default CustomColorSelect;
