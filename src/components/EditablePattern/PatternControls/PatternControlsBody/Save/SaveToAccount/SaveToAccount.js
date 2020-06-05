import React, { useContext } from "react";
import axios from "axios";
import { StateContext } from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";

const SaveToAccount = props => {
  const data = useContext(StateContext);

  const savePatternHandler = data => {
    const postData = { ...data };
    delete postData.lockMode;
    delete postData.activePattern;
    delete postData.activeColorSelection;
    axios
      .post(
        "https://the-infinite-coloring-book.firebaseio.com/patterns.json",
        postData
      )
      .then(response => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={() => savePatternHandler(data)}>
          Save to My Account
        </Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default SaveToAccount;
