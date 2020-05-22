import React, { useContext } from "react";
import { DispatchContext } from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";

const Randomise = props => {
  const dispatch = useContext(DispatchContext);

  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={() => dispatch({ type: "NEW-PATTERN" })}>
          Randomise unlocked Tiles
        </Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Randomise;
