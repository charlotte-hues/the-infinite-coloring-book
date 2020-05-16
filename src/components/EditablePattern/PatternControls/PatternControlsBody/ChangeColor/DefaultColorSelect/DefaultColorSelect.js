import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import colors from "../../../../../../context/PatternContext/DefaultValues/Colors/Colors";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import ColorIcon from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const DefaultColorSelect = props => {
  const dispatch = useContext(DispatchContext);
  const { activeColorGroup, activeColor } = useContext(StateContext);

  const colorButtons = Array.from({
    length: colors.default.length
  }).map((_, i) => {
    let active = activeColorGroup === "default" && activeColor === i;

    return (
      <li key={i}>
        <IconButton
          onClick={() =>
            dispatch({
              type: "UPDATE-COLOR",
              colorGroup: "default",
              index: i
            })
          }
          active={active}
        >
          <ColorIcon
            pattern={colors.default[i][0]}
            background={colors.default[i][1]}
            active={active}
          />
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
