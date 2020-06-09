import React, { useContext } from "react";
import axios from "axios";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";
import { Spacer } from "../../../../../UI/Divider/Divider";
import removeFromObject from "../../../../../../utility/removeFromObject";

const SaveToAccount = props => {
  const data = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const saveNewPatternHandler = data => {
    const date = new Date();
    const postData = { ...data, createdDate: date, lastUpdated: date };
    delete postData.lockMode;
    delete postData.activePattern;
    delete postData.edited;
    delete postData.activeColorSelection;
    axios
      .post(
        "https://the-infinite-coloring-book.firebaseio.com/patterns.json",
        postData
      )
      .then(response => {
        console.log("saved");
        dispatch({ type: "SAVED-PATTERN", id: response.data.name });
      })
      .catch(error => console.log(error));
  };

  const saveExistingPatternHandler = data => {
    const date = new Date();
    const postData = { ...data, lastUpdated: date };
    removeFromObject(postData, [
      "lockMode",
      "activePattern",
      "edited",
      "activeColorSelection"
    ]);
    axios
      .put(
        "https://the-infinite-coloring-book.firebaseio.com/patterns/" +
          data.id +
          ".json",
        postData
      )
      .then(response => {
        dispatch({ type: "SAVED-PATTERN", id: response.data.id });
      })
      .catch(error => console.log(error));
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <Button
          disabled={!data.id || !data.edited}
          onClick={() => saveExistingPatternHandler(data)}
        >
          Save changes
        </Button>
        <Spacer width="20px" />
        <Button onClick={() => saveNewPatternHandler(data)}>Save as new</Button>
      </InputWrapper>
    </React.Fragment>
  );
};

export default SaveToAccount;
