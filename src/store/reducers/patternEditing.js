import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  activeColorSelection: "pattern",
  lockMode: false,
  activePattern: 999
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCK_MODE:
      return setLockMode(state, action);
    case actionTypes.SET_ACTIVE_PATTERN:
      return setActivePattern(state, action);
    case actionTypes.UPDATE_ACTIVE_COLOR_SELECTION:
      return updateActiveColorSelection(state, action);
    default:
      return state;
  }
};

export default reducer;
