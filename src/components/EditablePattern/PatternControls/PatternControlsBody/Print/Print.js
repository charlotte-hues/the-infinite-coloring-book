import React from "react";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
// import { StateContext } from "../../../../../context/PatternContext/PatternContext";

const Print = props => {
  // const { label } = useContext(StateContext);
  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={() => window.print()}>Print</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default Print;
