import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fbAuth } from "../../configs/firebase.config";

const savePatternSuccess = id => {
  return {
    type: actionTypes.SAVE_PATTERN_SUCCESS,
    id: id
  };
};

const savePatternFail = error => {
  return {
    type: actionTypes.SAVE_PATTERN_FAIL,
    error: error
  };
};

const savePatternStart = () => {
  return {
    type: actionTypes.SAVE_PATTERN_START
  };
};

export const deletePatternSuccess = newPatternsArray => {
  return {
    type: actionTypes.DELETE_PATTERN,
    patterns: newPatternsArray
  };
};

export const saveNewPattern = (patternData, token) => {
  return dispatch => {
    dispatch(savePatternStart());
    axios
      .post(
        "https://the-infinite-coloring-book.firebaseio.com/patterns.json" +
          `?auth=${token}`,
        patternData
      )
      .then(response => {
        dispatch(savePatternSuccess(response.data.name, patternData));
      })
      .catch(error => dispatch(savePatternFail(error)));
  };
};

export const saveExistingPattern = (patternData, currentUser, patternId) => {
  return dispatch => {
    dispatch(savePatternStart());
    fbAuth.currentUser
      .getIdToken(true)
      .then(idToken => {
        axios
          .put(
            "https://the-infinite-coloring-book.firebaseio.com/patterns/" +
              patternId +
              ".json" +
              `?auth=${idToken}`,
            patternData
          )
          .then(response => {
            dispatch(savePatternSuccess(patternId, patternData));
          })
          .catch(error => dispatch(savePatternFail(error)));
      })
      .catch(error => dispatch(savePatternFail(error)));
  };
};

export const deletePattern = (patternId, token, patterns) => {
  return dispatch => {
    axios
      .delete(
        "https://the-infinite-coloring-book.firebaseio.com/patterns/" +
          patternId +
          ".json" +
          `?auth=${token}`
      )
      .then(response => {
        const newPatternsArray = [...patterns].filter(
          patternObj => patternObj.id !== patternId
        );
        dispatch(deletePatternSuccess(newPatternsArray));
      })
      .catch(error => dispatch(savePatternFail(error)));
  };
};

//
const fetchPatternsSuccess = patterns => {
  return {
    type: actionTypes.FETCH_PATTERNS_SUCCESS,
    patterns: patterns
  };
};

const fetchPatternsFail = error => {
  return {
    type: actionTypes.FETCH_PATTERNS_FAIL,
    error: error
  };
};

const fetchPatternsStart = () => {
  return {
    type: actionTypes.FETCH_PATTERNS_START
  };
};

export const fetchPatterns = currentUser => {
  return dispatch => {
    dispatch(fetchPatternsStart());
    fbAuth.currentUser
      .getIdToken(true)
      .then(idToken => {
        const queryParams = `?auth=${idToken}&orderBy="uid"&equalTo="${currentUser.uid}"`;
        axios
          .get(
            "https://the-infinite-coloring-book.firebaseio.com/patterns.json" +
              queryParams
          )
          .then(response => {
            const fetchedPatterns = [];
            for (let key in response.data) {
              if (response.data[key].uid === currentUser.uid) {
                fetchedPatterns.push({ ...response.data[key], id: key });
              }
            }
            dispatch(fetchPatternsSuccess(fetchedPatterns));
          })
          .catch(error => dispatch(fetchPatternsFail(error)));
      })
      .catch(function(error) {
        dispatch(fetchPatternsFail(error));
      });
  };
};
