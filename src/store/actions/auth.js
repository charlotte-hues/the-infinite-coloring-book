import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = data => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.idToken,
    userId: data.localId,
    expirationTime: data.expirationDate
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    const url = isSignUp
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2gRE7qjodVNT5PLBwyFW20-Ok2wmBQLA"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2gRE7qjodVNT5PLBwyFW20-Ok2wmBQLA";
    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        dispatch(checkAuthTimeout(response.data.expiresIn));
        dispatch(authSuccess({ ...response.data, expirationDate }));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirect = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const authState = { ...JSON.parse(localStorage.getItem("state")).auth };
    const token = authState.token;
    if (!token) return;
    const expirationTime = new Date(authState.expirationTime);
    if (expirationTime <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(
        authSuccess({
          idToken: token,
          localId: authState.userId,
          expirationDate: authState.expirationTime
        })
      );
      dispatch(
        checkAuthTimeout(
          (expirationTime.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  };
};
