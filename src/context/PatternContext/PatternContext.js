import React, { useReducer } from "react";
import randPatternArray, {
  maxNo,
  getColumns
} from "./DefaultValues/RandPatternArray/RandPatternArray";
import getRandNum from "../../utility/getRandNum";
import { getFromStorage, updateStorage } from "../../utility/getLocalStorage";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const initialState = {
  patterns: getFromStorage("patterns", randPatternArray("portrait", 0)),
  orientation: getFromStorage("orientation", "portrait"),
  complexity: getFromStorage("complexity", 0),
  columns: getColumns(
    getFromStorage("orientation", "portrait"),
    getFromStorage("complexity", 0)
  ),
  patternColor: getFromStorage("patternColor", "#E1DBD2"),
  backgroundColor: getFromStorage("backgroundColor", "#F7F3EE"),
  label: getFromStorage("label", ""),
  imageName: getFromStorage("imageName", "the-infinite-coloring-book")
};

const switchTile = (state, index) => {
  const updatedPattern = [...state.patterns];
  let newNum = getRandNum(maxNo);
  while (state.patterns[index] === newNum) {
    newNum = getRandNum(maxNo);
  }
  updatedPattern[index] = newNum;
  updateStorage("patterns", updatedPattern);
  return { ...state, patterns: updatedPattern };
};

const updatePatternColor = (state, patternColor) => {
  updateStorage("patternColor", patternColor);
  return { ...state, patternColor: patternColor };
};

const updateComplexity = (state, newComplexity) => {
  const newPattern = randPatternArray(state.orientation, newComplexity);
  const columns = getColumns(state.orientation, newComplexity);
  updateStorage("complexity", newComplexity);
  updateStorage("patterns", newPattern);
  updateStorage("columns", columns);
  return {
    ...state,
    complexity: newComplexity,
    patterns: newPattern,
    columns: columns
  };
};

const updateOrientation = (state, newOrientation) => {
  const newPattern = randPatternArray(newOrientation, state.complexity);
  const columns = getColumns(newOrientation, state.complexity);
  updateStorage("orientation", newOrientation);
  updateStorage("patterns", newPattern);
  updateStorage("columns", columns);
  return {
    ...state,
    orientation: newOrientation,
    patterns: newPattern,
    columns: columns
  };
};

const newPattern = state => {
  const newPattern = randPatternArray(state.orientation, state.complexity);
  return { ...state, patterns: newPattern };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH-TILE":
      return switchTile(state, action.index);
    case "NEW-PATTERN":
      return newPattern(state);
    case "UPDATE-PATTERN-COLOR":
      return updatePatternColor(state, action.patternColor);
    case "UPDATE-COMPLEXITY":
      return updateComplexity(state, action.newComplexity);
    case "UPDATE-ORIENTATION":
      return updateOrientation(state, action.orientation);
    default:
      throw new Error();
  }
};

const PatternContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default PatternContextProvider;
