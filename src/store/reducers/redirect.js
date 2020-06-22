import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  authRedirectPath: "/"
};

const setAuthPathRedirect = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthPathRedirect(state, action);
    default:
      return state;
  }
};

export default reducer;
