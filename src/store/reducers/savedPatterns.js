import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  patterns: [],
  loading: true,
  error: false
};

const savePatternStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false
  });
};

const savePatternFail = (state, action) => {
  return updateObject(state, {
    error: true,
    loading: false
  });
};

const savePatternSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loading: false
  });
};

const fetchPatternsStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: false
  });
};

const fetchPatternsFail = (state, action) => {
  return updateObject(state, {
    error: true,
    loading: false
  });
};

const fetchPatternsSuccess = (state, action) => {
  return updateObject(state, {
    patterns: action.patterns,
    loading: false,
    error: false
  });
};

const deletePatternSuccess = (state, action) => {
  return updateObject(state, {
    patterns: action.patterns,
    loading: false,
    error: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    patterns: []
  });
};

const setCurrentUser = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const clearCurrentUser = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_PATTERN_START:
      return savePatternStart(state, action);
    case actionTypes.SAVE_PATTERN_FAIL:
      return savePatternFail(state, action);
    case actionTypes.SAVE_PATTERN_SUCCESS:
      return savePatternSuccess(state, action);

    case actionTypes.FETCH_PATTERNS_START:
      return fetchPatternsStart(state, action);
    case actionTypes.FETCH_PATTERNS_FAIL:
      return fetchPatternsFail(state, action);
    case actionTypes.FETCH_PATTERNS_SUCCESS:
      return fetchPatternsSuccess(state, action);

    case actionTypes.DELETE_PATTERN:
      return deletePatternSuccess(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_CURRENT_USER:
      return setCurrentUser(state, action);
    case actionTypes.CLEAR_CURRENT_USER:
      return clearCurrentUser(state, action);

    default:
      return state;
  }
};

export default reducer;
