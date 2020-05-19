import React, { useContext } from "react";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import IconButton from "../../../../../UI/Button/IconButton";
import IconsContainer from "../../../PatternControlsInputs/InputWrapper/IconContainers/IconsContainer";
import { ActiveColorSelectionIcon } from "../../../PatternControlsInputs/Inputs/ControlIcons/ColorIcon/ColorIcon";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";

const selections = ["pattern", "background"];

const ActiveColorSelection = props => {
  const dispatch = useContext(DispatchContext);
  const { activeColorSelection, backgroundColor, patternColor } = useContext(
    StateContext
  );

  const selectionButtons = selections.map((selection, i) => {
    let active = activeColorSelection === selection;
    return (
      <li key={i}>
        <IconButton
          onClick={() =>
            dispatch({
              type: "UPDATE-ACTIVE-COLOR-SELECTION",
              selection: selection
            })
          }
          active={active}
        >
          <ActiveColorSelectionIcon
            active={active}
            background={selection === "background" ? backgroundColor : null}
            pattern={selection === "pattern" ? patternColor : null}
          />
        </IconButton>
      </li>
    );
  });

  return (
    <InputWrapper>
      <IconsContainer>{selectionButtons}</IconsContainer>
    </InputWrapper>
  );
};

export default ActiveColorSelection;
