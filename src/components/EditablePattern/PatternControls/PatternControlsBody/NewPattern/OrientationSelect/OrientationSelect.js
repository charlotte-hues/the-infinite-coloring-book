import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import OrientationIcons from "../../../PatternControlsInputs/Inputs/ControlIcons/OrientationIcons/OrientationIcons";

const orientations = ["portrait", "landscape", "square"];

const OrientationSelect = props => {
  const { orientation } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const orientationButtons = orientations.map(ori => {
    const active = orientation === ori;
    return (
      <li key={ori}>
        <IconButton
          disabled={active}
          onClick={() =>
            dispatch({ type: "UPDATE-ORIENTATION", orientation: ori })
          }
        >
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
