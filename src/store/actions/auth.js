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

export const clearAuthNotice = () => {
  return {
    type: actionTypes.CLEAR_AUTH_NOTICE
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

const passwordResetSuccess = () => {
  return {
    type: actionTypes.PASSWORD_RESET_SUCCESS
  };
};

export const sendPasswordReset = email => {
  return dispatch => {
    dispatch(authStart());
    fbAuth
      .sendPasswordResetEmail(email)
      .then(response => {
        dispatch(passwordResetSuccess());
      })
      .catch(error => dispatch(authFail(error.message)));
  };
};

export const deleteCurrentUser = () => {
  return dispatch => {
    dispatch(authStart());
    fbAuth.currentUser
      .delete()
      .then(response => {
        dispatch(clearCurrentUser());
      })
      .catch(error => dispatch(authFail(error.message)));
  };
};
