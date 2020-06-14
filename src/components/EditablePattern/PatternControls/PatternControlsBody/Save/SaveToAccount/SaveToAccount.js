import React, { useContext } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { DispatchContext } from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../../UI/Button/Button";
import { Spacer } from "../../../../../UI/Divider/Divider";
import * as actions from "../../../../../../store/actions/index";

const SaveToAccount = ({
  data,
  uid,
  patternId,
  isAuth,
  authToken,
  onSaveNewPattern,
  onSaveExistingPattern
}) => {
  const saveNewPatternHandler = data => {
    const date = new Date();
    const patternData = {
      ...data,
      createdDate: date,
      lastUpdated: date,
      uid: uid
    };
    onSaveNewPattern(patternData, authToken, patternId);
  };

  const saveExistingPatternHandler = data => {
    const date = new Date();
    const postData = { ...data, lastUpdated: date };
    onSaveExistingPattern(postData, authToken);
  };

  const options = isAuth ? (
    <React.Fragment>
      <Button
        disabled={!data.patternId || !data.edited}
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
    uid: state.auth.userId,
    patternId: state.savedPatterns.patternId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/")),
    onSaveNewPattern: (patternData, token, patternId) =>
      dispatch(actions.saveNewPattern(patternData, token)),
    onSaveExistingPattern: (patternData, token) =>
      dispatch(actions.saveExistingPattern(patternData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveToAccount);
