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

export const clearCurrentUser = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_USER
  };
};

export const logout = () => {
  return dispatch => {
    fbAuth.signOut().then(() => dispatch(clearCurrentUser()));
  };
};

const setCurrentUser = (user, token, firstTime) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    currentUser: user,
    displayName: user.displayName,
    uid: user.uid,
    token: token,
    isFirstTime: firstTime
  };
};

export const getCurrentUser = user => {
  return dispatch => {
    user
      .getIdToken(true)
      .then(idToken => {
        dispatch(setCurrentUser(user, idToken));
      })
      .catch(error => {
        dispatch(authFail(error.message));
      });
  };
};

export const createUser = (email, password, name) => {
  let currentUser = null;
  return dispatch => {
    dispatch(authStart());
    fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        currentUser = user.user;
      })
      .then(() => {
        currentUser.updateProfile({
          displayName: name
        });
      })
      .then(() => {
        currentUser.sendEmailVerification();
      })
      .catch(error => {
        dispatch(authFail(error.message));
      });
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    fbAuth.signInWithEmailAndPassword(email, password).catch(error => {
      dispatch(authFail(error.message));
    });
  };
};

export const setAuthRedirect = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
