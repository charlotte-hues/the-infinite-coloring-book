import React, { useContext, useState } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import {
  ColorIconDiv,
  CustomColorIcon
} from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import HslSliders from "../HslSliders/HslSliders";

const ColorPicker = props => {
  const [customColorActive, setCustomColorActive] = useState(false);

  const dispatch = useContext(DispatchContext);
  const {
    activeColorSelection,
    activeBackgroundColor,
    activePatternColor,
    colorArray
  } = useContext(StateContext);

  const activeSelection =
    activeColorSelection === "pattern"
      ? activePatternColor
      : activeBackgroundColor;
  console.log(activeSelection);

  const colorButtons = Array.from({
    length: colorArray.length
  }).map((_, i) => {
    let active = activeSelection === i;
    return (
      <li key={i}>
        <IconButton
          onClick={() =>
            dispatch({
              type: "UPDATE-COLOR",
              color: colorArray[i],
              index: i
            })
          }
          active={active}
        >
          <ColorIconDiv color={colorArray[i]} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper>
      <IconsContainer>
        {colorButtons}
        {/* <IconButton>
          <CustomColorIcon />
        </IconButton> */}
      </IconsContainer>
    </InputWrapper>
    // <HslSliders />
  );
};

export default ColorPicker;
