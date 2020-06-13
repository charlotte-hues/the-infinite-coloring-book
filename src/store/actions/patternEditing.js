import * as actionTypes from "./actionTypes";

export const setLockMode = lockMode => {
  return {
    type: actionTypes.SET_LOCK_MODE,
    lockMode: lockMode
  };
};

export const setActivePattern = index => {
  return {
    type: actionTypes.SET_ACTIVE_PATTERN,
    num: index
  };
};
