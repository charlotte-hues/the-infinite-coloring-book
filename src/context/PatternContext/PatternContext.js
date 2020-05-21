import React, { useReducer } from "react";
import colors from "./DefaultValues/Colors/Colors";
import randPatternArray, {
  maxNo,
  getColumns
} from "./DefaultValues/RandPatternArray/RandPatternArray";
import getRandNum from "../../utility/getRandNum";
import { getFromStorage, updateStorage } from "../../utility/getLocalStorage";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const initialState = {
  patterns: getFromStorage(
    "patterns",
    randPatternArray("square", 2).map(num => {
      return { num: num, locked: false };
    })
  ),
  orientation: getFromStorage("orientation", "square"),
  complexity: getFromStorage("complexity", 2),
  columns: getColumns(
    getFromStorage("orientation", "square"),
    getFromStorage("complexity", 2)
  ),
  colorArray: getFromStorage("colorArray", [...colors.all]),
  activeColorSelection: "pattern",
  activeBackgroundColor: getFromStorage("activeBackgroundColor", 2),
  activePatternColor: getFromStorage("activePatternColor", 4),
  patternColor: getFromStorage("patternColor", "#C74F33"),
  backgroundColor: getFromStorage("backgroundColor", "#F7F3EE"),
  label: getFromStorage("label", ""),
  imageName: getFromStorage("imageName", "the-infinite-coloring-book"),
  lockMode: false
};

const switchTile = (state, index, event) => {
  console.log("SWITCH TILE");
  const updatedPattern = [...state.patterns];
  let newNum = getRandNum(maxNo);
  while (state.patterns[index].num === newNum) {
    newNum = getRandNum(maxNo);
  }
  updatedPattern[index].num = newNum;
  updateStorage("patterns", updatedPattern);
  return { ...state, patterns: updatedPattern };
};

const lockTile = (state, index, event) => {
  const newPattern = [...state.patterns];
  newPattern[index].locked = !newPattern[index].locked;
  console.log(newPattern[index]);
  return { ...state, patterns: newPattern };
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

const updateLabel = (state, newLabel) => {
  updateStorage("label", newLabel);
  return { ...state, label: newLabel };
};

const updateImageName = (state, newImageName) => {
  updateStorage("imageName", newImageName);
  return { ...state, imageName: newImageName };
};

const newPattern = state => {
  const newRandPattern = randPatternArray(state.orientation, state.complexity);
  const newPattern = state.patterns.map((patternObj, i) => {
    const newNumber = patternObj.locked ? patternObj.num : newRandPattern[i];
    return { num: newNumber, locked: patternObj.locked };
  });
  return {
    ...state,
    patterns: newPattern
  };
};

const updateColor = (state, color, index) => {
  if (state.activeColorSelection === "pattern") {
    updateStorage("patternColor", color);
    updateStorage("activePatternColor", index);

    return { ...state, patternColor: color, activePatternColor: index };
  } else {
    updateStorage("backgroundColor", color);
    updateStorage("activeBackgroundColor", index);
    return { ...state, backgroundColor: color, activeBackgroundColor: index };
  }
};

const updateActiveColorSelection = (state, selection) => {
  return { ...state, activeColorSelection: selection };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH-TILE":
      return switchTile(state, action.index, action.event);
    case "LOCK-TILE":
      return lockTile(state, action.index, action.event);
    case "NEW-PATTERN":
      return newPattern(state);

    case "UPDATE-COLOR":
      return updateColor(state, action.color, action.index);
    case "UPDATE-ACTIVE-COLOR-SELECTION":
      return updateActiveColorSelection(state, action.selection);

    case "UPDATE-COMPLEXITY":
      return updateComplexity(state, action.newComplexity);
    case "UPDATE-ORIENTATION":
      return updateOrientation(state, action.orientation);
    case "UPDATE-LABEL":
      return updateLabel(state, action.newLabel);
    case "UPDATE-IMAGE-NAME":
      return updateImageName(state, action.newImageName);
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
