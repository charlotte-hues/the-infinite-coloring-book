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
  imageName: getFromStorage("imageName", "the-infinite-coloring-book"),
  lockMode: false,
  activePattern: 999,
  id: getFromStorage("id", null)
};

const switchTile = (state, action) => {
  if (state.patterns[action.index].locked) return state;
  const updatedPattern = [...state.patterns];
  let newNum;
  if (state.activePattern < 900) {
    newNum = state.activePattern;
  } else {
    newNum = getRandNum(maxNo);
    while (state.patterns[action.index].num === newNum) {
      newNum = getRandNum(maxNo);
    }
  }
  updatedPattern[action.index].num = newNum;
  updateStorage("patterns", updatedPattern);
  return { ...state, patterns: updatedPattern };
};

const lockTile = (state, action) => {
  const newPattern = [...state.patterns];
  newPattern[action.index].locked = !action.locked;
  updateStorage("patterns", newPattern);
  return { ...state, patterns: newPattern };
};

const updateComplexity = (state, action) => {
  const newPattern = randPatternArray(
    state.orientation,
    action.newComplexity
  ).map(num => {
    return { num: num, locked: false };
  });
  const columns = getColumns(state.orientation, action.newComplexity);
  updateStorage("complexity", action.newComplexity);
  updateStorage("patterns", newPattern);
  updateStorage("columns", columns);
  updateStorage("id", null);
  return {
    ...state,
    complexity: action.newComplexity,
    patterns: newPattern,
    columns: columns,
    id: null
  };
};

const updateOrientation = (state, action) => {
  const newPattern = randPatternArray(action.orientation, state.complexity).map(
    num => {
      return { num: num, locked: false };
    }
  );
  const columns = getColumns(action.orientation, state.complexity);
  updateStorage("orientation", action.orientation);
  updateStorage("patterns", newPattern);
  updateStorage("columns", columns);
  updateStorage("id", null);
  return {
    ...state,
    orientation: action.orientation,
    patterns: newPattern,
    columns: columns,
    id: null
  };
};

const updateImageName = (state, newImageName) => {
  updateStorage("imageName", newImageName);
  return { ...state, imageName: newImageName };
};

// const newPattern = state => {
//   const newRandPattern = randPatternArray(state.orientation, state.complexity);
//   const newPattern = state.patterns.map((patternObj, i) => {
//     const newNumber = patternObj.locked ? patternObj.num : newRandPattern[i];
//     return { num: newNumber, locked: patternObj.locked };
//   });
//   return {
//     ...state,
//     patterns: newPattern
//   };
// };

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

const setLockMode = (state, active) => {
  return { ...state, lockMode: active };
};

const clearLockedTiles = state => {
  const updatedPattern = state.patterns.map(patternObj => {
    return { ...patternObj, locked: false };
  });
  updateStorage("patterns", updatedPattern);
  return { ...state, patterns: updatedPattern };
};

const newTemplate = (state, template) => {
  updateStorage("patterns", template.patterns);
  updateStorage("columns", template.columns);
  updateStorage("complexity", template.complexity);
  updateStorage("orientation", template.orientation);
  updateStorage("id", null);
  return {
    ...state,
    patterns: template.patterns,
    columns: template.columns,
    complexity: template.complexity,
    orientation: template.orientation,
    id: null
  };
};

const setActivePattern = (state, num) => {
  return {
    ...state,
    activePattern: num
  };
};

const loadPattern = (state, data) => {
  updateStorage("patterns", data.patterns);
  updateStorage("columns", data.columns);
  updateStorage("complexity", data.complexity);
  updateStorage("orientation", data.orientation);
  updateStorage("patternColor", data.patternColor);
  updateStorage("activePatternColor", data.activePatternColor);
  updateStorage("backgroundColor", data.backgroundColor);
  updateStorage("activeBackgroundColor", data.activeBackgroundColor);
  updateStorage("imageName", data.imageName);
  updateStorage("id", data.id);
  return {
    ...data,
    activePattern: 999,
    lockMode: false,
    activeColorSelection: "pattern"
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH-TILE":
      return switchTile(state, action);
    case "LOCK-TILE":
      return lockTile(state, action);
    case "UPDATE-COMPLEXITY":
      return updateComplexity(state, action);
    case "UPDATE-ORIENTATION":
      return updateOrientation(state, action);
    case "SET-LOCK-MODE":
      return setLockMode(state, action.active);
    case "SET-ACTIVE-PATTERN":
      return setActivePattern(state, action.num);
    case "CLEAR-LOCKED-TILES":
      return clearLockedTiles(state);
    // case "NEW-PATTERN":
    //   return newPattern(state);
    case "NEW-TEMPLATE":
      return newTemplate(state, action.template);
    case "UPDATE-COLOR":
      return updateColor(state, action.color, action.index);
    case "UPDATE-ACTIVE-COLOR-SELECTION":
      return updateActiveColorSelection(state, action.selection);
    case "UPDATE-IMAGE-NAME":
      return updateImageName(state, action.newImageName);
    case "LOAD-PATTERN":
      return loadPattern(state, action.data);
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
