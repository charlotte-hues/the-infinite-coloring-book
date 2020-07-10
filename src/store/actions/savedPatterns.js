import * as actionTypes from "./actionTypes";
import axios from "axios";

const savePatternSuccess = id => {
  return {
    type: actionTypes.SAVE_PATTERN_SUCCESS,
    id: id
  };
};

const saveNewPatternSuccess = id => {
  return {
    type: actionTypes.SAVE_NEW_PATTERN_SUCCESS,
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
      .then(() => dispatch(saveNewPatternSuccess()))
      .catch(error => dispatch(savePatternFail(error)));
  };
};

export const saveExistingPattern = (patternData, token, patternId) => {
  return dispatch => {
    dispatch(savePatternStart());
    axios
      .put(
        "https://the-infinite-coloring-book.firebaseio.com/patterns/" +
          patternId +
          ".json" +
          `?auth=${token}`,
        patternData
      )
      .then(response => {
        dispatch(savePatternSuccess(patternId, patternData));
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

export const fetchPatterns = (token, uid) => {
  return dispatch => {
    dispatch(fetchPatternsStart());
    const queryParams = `?auth=${token}&orderBy="uid"&equalTo="${uid}"`;
    axios
      .get(
        "https://the-infinite-coloring-book.firebaseio.com/patterns.json" +
          queryParams
      )
      .then(response => {
        const fetchedPatterns = [];
        for (let key in response.data) {
          if (response.data[key].uid === uid) {
            fetchedPatterns.push({ ...response.data[key], id: key });
          }
        }
        dispatch(fetchPatternsSuccess(fetchedPatterns));
      })
      .catch(error => dispatch(fetchPatternsFail(error)));
  };
};
