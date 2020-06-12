import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  patterns: randPatternArray("square", 2).map(num => {
    return { num: num, locked: false };
  }),
  orientation: "square",
  complexity: 2,
  columns: 6,
  colorArray: [...colors.all],
  activeBackgroundColor: 2,
  activePatternColor: 4,
  patternColor: "#C74F33",
  backgroundColor: "#F7F3EE",
  imageName: "the-infinite-coloring-book",
  patternId: null,
  edited: false,
  activeColorSelection: "pattern",
  lockMode: false,
  activePattern: 999
};

const switchTile = (state, action) => {
  return updateObject(state, {
    patterns: action.updatedPattern,
    edited: true
  });
};

const lockTile = (state, action) => {
  return updateObject(state, {
    patterns: action.newPattern,
    edited: true
  });
};

const updateComplexity = (state, action) => {
  return updateObject(state, {
    complexity: action.newComplexity,
    patterns: action.newPattern,
    columns: action.columns,
    patternId: null,
    edited: false
  });
};

const updateOrientation = (state, action) => {
  return updateObject(state, {
    orientation: action.orientation,
    patterns: action.newPattern,
    columns: columns,
    patternId: null,
    edited: false
  });
};

const updateImageName = (state, newImageName) => {
  return updateObject(state, {
    imageName: newImageName,
    edited: true
  });
};

const updateColor = (state, color, index) => {
  if (state.activeColorSelection === "pattern") {
    updateStorage("patternColor", color);
    updateStorage("activePatternColor", index);

    return { ...state, patternColor: color, activePatternColor: index };
  } else {
    updateStorage("backgroundColor", color);
    updateStorage("activeBackgroundColor", index);
    return {
      ...state,
      backgroundColor: color,
      activeBackgroundColor: index,
      edited: true
    };
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
  updateStorage("patternId", null);
  updateStorage("edited", false);
  return {
    ...state,
    patterns: template.patterns,
    columns: template.columns,
    complexity: template.complexity,
    orientation: template.orientation,
    patternId: null,
    edited: false
  };
};

const setActivePattern = (state, num) => {
  return {
    ...state,
    activePattern: num
  };
};

const savedPattern = (state, action) => {
  updateStorage("edited", false);
  updateStorage("patternId", action.id);
  return { ...state, edited: false, patternId: action.id };
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
  updateStorage("edited", false);
  updateStorage("patternId", data.id);
  return {
    ...data,
    activePattern: 999,
    lockMode: false,
    activeColorSelection: "pattern",
    edited: false
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
    case "SAVED-PATTERN":
      return savedPattern(state, action);
    default:
      throw new Error();
  }
};
