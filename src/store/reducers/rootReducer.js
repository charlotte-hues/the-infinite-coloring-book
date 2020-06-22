import { combineReducers } from "redux";

import authReducer from "./auth";
import savedPatternsReducer from "./savedPatterns";
import currentPatternReducer from "./currentPattern";
import patternEditingReducer from "./patternEditing";
import redirectReducer from "./redirect";

const rootReducer = combineReducers({
  auth: authReducer,
  savedPatterns: savedPatternsReducer,
  currentPattern: currentPatternReducer,
  patternEditing: patternEditingReducer,
  redirect: redirectReducer
});

export default rootReducer;
