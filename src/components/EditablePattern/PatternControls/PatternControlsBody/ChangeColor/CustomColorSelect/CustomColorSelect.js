import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import ColorIcon, {
  CustomColorIcon
} from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const CustomColorSelect = props => {
  const dispatch = useContext(DispatchContext);
  const { activeColorGroup, activeColor, colorArray } = useContext(
    StateContext
  );

  const colorButtons = Array.from({
    length: colorArray.custom.length
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
            pattern={colorArray.custom[i][0]}
            background={colorArray.custom[i][1]}
            active={active}
          />
        </IconButton>
      </li>
    );
  });

  let addCustomIcon = null;
  if (colorArray.custom.length <= 4) {
    addCustomIcon = (
      <li key={"addCustom"}>
        <IconButton
          onClick={() =>
            dispatch({
              type: "ADD-CUSTOM-COLOR"
            })
          }
        >
          <CustomColorIcon />
        </IconButton>
      </li>
    );
  }

  return (
    <InputWrapper label="custom:">
      <IconsContainer>
        {colorButtons}
        {addCustomIcon}
      </IconsContainer>
    </InputWrapper>
  );
};

export default CustomColorSelect;
