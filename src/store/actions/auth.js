import * as actionTypes from "./actionTypes";
import { fbAuth } from "../../configs/firebase.config";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const clearAuthError = () => {
  return {
    type: actionTypes.CLEAR_AUTH_ERROR
  };
};

export const logout = () => {
  fbAuth.signOut();
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const setCurrentUser = user => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    currentUser: user
  };
};

export const clearCurrentUser = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_USER
  };
};

export const auth = (email, password, isSignUp, name) => {
  return dispatch => {
    dispatch(authStart());
    if (isSignUp) {
      // fbAuth
      //   .sendSignInLinkToEmail(email, actionCodeSettings)
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error));
      fbAuth
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch(setCurrentUser(user));
          fbAuth.currentUser.updateProfile({
            displayName: name
          });
        })
        .catch(error => {
          dispatch(authFail(error.message));
        });
    } else {
      fbAuth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          dispatch(setCurrentUser(user));
        })
        .catch(error => {
          dispatch(authFail(error.message));
        });
    }
  };
};

export const setAuthRedirect = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
