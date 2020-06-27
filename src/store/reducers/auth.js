import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  uid: null,
  token: null,
  displayName: null,
  passwordReset: null
};

const authStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const setCurrentUser = (state, action) => {
  return updateObject(state, {
    currentUser: action.currentUser,
    uid: action.uid,
    token: action.token,
    displayName: action.displayName,
    loading: false,
    error: false
  });
};

const clearCurrentUser = (state, action) => {
  return updateObject(state, {
    currentUser: null,
    uid: null,
    token: null,
    displayName: null,
    loading: false,
    error: null
  });
};

const clearAuthError = (state, action) => {
  return updateObject(state, {
    error: null,
    passwordReset: null
  });
};

const resetPasswordSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: null,
    passwordReset: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.CLEAR_AUTH_ERROR:
      return clearAuthError(state, action);
    case actionTypes.SET_CURRENT_USER:
      return setCurrentUser(state, action);
    case actionTypes.CLEAR_CURRENT_USER:
      return clearCurrentUser(state, action);
    case actionTypes.PASSWORD_RESET_SUCCESS:
      return resetPasswordSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
