import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  activeColorSelection: "pattern",
  lockMode: false,
  activePattern: 999,
  saved: false
};

const setLockMode = (state, action) => {
  return updateObject(state, {
    lockMode: action.lockMode
  });
};

const setActivePattern = (state, action) => {
  return updateObject(state, {
    activePattern: action.num
  });
};

const updateActiveColorSelection = (state, action) => {
  return updateObject(state, {
    activeColorSelection: action.selection
  });
};

const loadPattern = (state, action) => {
  return updateObject(state, {
    activePattern: 999,
    lockMode: false,
    activeColorSelection: "pattern"
  });
};

const saveNewPatternSuccess = (state, action) => {
  return updateObject(state, {
    saved: true
  });
};

const clearNotice = (state, action) => {
  return updateObject(state, {
    saved: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCK_MODE:
      return setLockMode(state, action);
    case actionTypes.SET_ACTIVE_PATTERN:
      return setActivePattern(state, action);
    case actionTypes.UPDATE_ACTIVE_COLOR_SELECTION:
      return updateActiveColorSelection(state, action);

    case actionTypes.LOAD_PATTERN:
      return loadPattern(state, action);
    case actionTypes.SAVE_NEW_PATTERN_SUCCESS:
      return saveNewPatternSuccess(state, action);
    case actionTypes.CLEAR_NOTICE:
      return clearNotice(state, action);
    default:
      return state;
  }
};

export default reducer;
