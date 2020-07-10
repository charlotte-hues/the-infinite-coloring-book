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

export const setActiveColorSelection = activeColorSelection => {
  return {
    type: actionTypes.UPDATE_ACTIVE_COLOR_SELECTION,
    selection: activeColorSelection === "pattern" ? "background" : "pattern"
  };
};

export const clearNotice = () => {
  return {
    type: actionTypes.CLEAR_NOTICE
  };
};
