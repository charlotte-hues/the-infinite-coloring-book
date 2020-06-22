import { combineReducers } from "redux";

import authReducer from "./auth";
import savedPatternsReducer from "./savedPatterns";
import currentPatternReducer from "./currentPattern";
import patternEditingReducer from "./patternEditing";

const rootReducer = combineReducers({
  auth: authReducer,
  savedPatterns: savedPatternsReducer,
  currentPattern: currentPatternReducer,
  patternEditing: patternEditingReducer
});

export default rootReducer;
