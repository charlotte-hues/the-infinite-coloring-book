import React, { useContext } from "react";
import axios from "axios";
import { StateContext } from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";
import { Spacer } from "../../../../../UI/Divider/Divider";

const SaveToAccount = props => {
  const data = useContext(StateContext);

  const saveNewPatternHandler = data => {
    const date = new Date();
    const postData = { ...data, createdData: date, lastUpdated: date };
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

  const saveExistingPatternHandler = data => {
    const date = new Date();
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <Button
          disabled={!data.id}
          onClick={() => saveExistingPatternHandler(data)}
        >
          Save
        </Button>
        <Spacer width="20px" />
        <Button onClick={() => saveNewPatternHandler(data)}>Save as new</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default SaveToAccount;
