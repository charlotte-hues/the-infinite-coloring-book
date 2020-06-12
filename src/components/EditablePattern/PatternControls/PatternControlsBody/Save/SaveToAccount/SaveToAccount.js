import React, { useContext } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  StateContext,
  DispatchContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";
import { Spacer } from "../../../../../UI/Divider/Divider";
import { removeFromObject } from "../../../../../../shared/utility";
import * as actions from "../../../../../../store/actions/index";

const SaveToAccount = props => {
  const data = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const saveNewPatternHandler = data => {
    const date = new Date();
    const patternData = {
      ...data,
      createdDate: date,
      lastUpdated: date,
      uid: props.uid
    };
    delete patternData.lockMode;
    delete patternData.activePattern;
    delete patternData.edited;
    delete patternData.activeColorSelection;

    props.onSaveNewPattern(patternData, props.authToken);
    // axios
    //   .post(
    //     "https://the-infinite-coloring-book.firebaseio.com/patterns.json",
    //     postData
    //   )
    //   .then(response => {
    //     console.log("saved");
    //     dispatch({ type: "SAVED-PATTERN", id: response.data.name });
    //   })
    //   .catch(error => console.log(error));
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

  const options = props.isAuth ? (
    <React.Fragment>
      <Button
        disabled={!data.id || !data.edited}
        onClick={() => saveExistingPatternHandler(data)}
      >
        Save changes
      </Button>
      <Spacer width="20px" />
      <Button onClick={() => saveNewPatternHandler(data)}>Save as new</Button>
    </React.Fragment>
  ) : (
    <Button
      onClick={() => {
        console.log("login");
      }}
    >
      Log in to save
    </Button>
  );

  return (
    <React.Fragment>
      <InputWrapper>{options}</InputWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    authToken: state.auth.token,
    uid: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/")),
    onSaveNewPattern: (patternData, token) =>
      dispatch(actions.saveNewPattern(patternData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveToAccount);
