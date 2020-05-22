import React, { useContext } from "react";
import {
  DispatchContext,
  StateContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";

const Randomise = props => {
  const dispatch = useContext(DispatchContext);
  const { patterns } = useContext(StateContext);

  const locked = patterns.some(patternObj => patternObj.locked === true);
  return (
    <React.Fragment>
      <InputWrapper>
        <Button
          disabled={!locked}
          onClick={() => dispatch({ type: "CLEAR-LOCKED-TILES" })}
        >
          Clear Locked Tiles
        </Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Randomise;
