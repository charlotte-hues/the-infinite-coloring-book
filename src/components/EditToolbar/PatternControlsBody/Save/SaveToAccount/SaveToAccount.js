import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import InputWrapper from "../../../../UI/InputWrapper/InputWrapper";
import Button, { WrappedButton } from "../../../../UI/Button/Button";
import { Spacer } from "../../../../UI/Divider/Divider";
import * as actions from "../../../../../store/actions/index";
import { fbDatabase } from "../../../../../configs/firebase.config";

const SaveToAccount = ({
  data,
  currentUser,
  isAuth,
  onSaveNewPattern,
  onSaveExistingPattern
}) => {
  //
  const saveNewPatternHandler = data => {
    const date = new Date();
    const patternData = {
      patternData: {
        pattern: data.pattern,
        orientation: data.orientation,
        complexity: data.complexity,
        columns: data.columns,
        colorArray: data.colorArray,
        activeBackgroundColor: data.activeBackgroundColor,
        activePatternColor: data.activePatternColor,
        patternColor: data.patternColor,
        backgroundColor: data.backgroundColor,
        imageName: data.imageName
      },
      createdDate: date,
      lastUpdated: date,
      uid: currentUser.uid
    };
    onSaveNewPattern(patternData, currentUser.xa);
  };

  const saveExistingPatternHandler = data => {
    const date = new Date();
    const patternData = {
      patternData: {
        pattern: data.pattern,
        orientation: data.orientation,
        complexity: data.complexity,
        columns: data.columns,
        colorArray: data.colorArray,
        activeBackgroundColor: data.activeBackgroundColor,
        activePatternColor: data.activePatternColor,
        patternColor: data.patternColor,
        backgroundColor: data.backgroundColor,
        imageName: data.imageName
      },
      createdDate: data.createdDate,
      lastUpdated: date,
      uid: currentUser.uid
    };
    onSaveExistingPattern(patternData, currentUser, data.id);
  };

  const location = useLocation();

  const options = isAuth ? (
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
  ) : (
    <Link
      to={{ pathname: `${location.pathname}/login`, state: { modal: true } }}
    >
      <WrappedButton>Log in to save</WrappedButton>
    </Link>
  );

  return <React.Fragment>{options}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser,
    data: state.currentPattern
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveNewPattern: (patternData, token) =>
      dispatch(actions.saveNewPattern(patternData, token)),
    onSaveExistingPattern: (patternData, token, patternId) =>
      dispatch(actions.saveExistingPattern(patternData, token, patternId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveToAccount);
