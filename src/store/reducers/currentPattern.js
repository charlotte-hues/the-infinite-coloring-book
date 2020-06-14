import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  pattern: [
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false },
    { num: 21, locked: false }
  ],
  orientation: "square",
  complexity: 2,
  columns: 6,
  colorArray: [
    "white",
    "black",
    "#F7F3EE",
    "#E1DBD2",
    "#C74F33",
    "#7A527A",
    "#2F544E"
  ],
  activeBackgroundColor: 2,
  activePatternColor: 4,
  patternColor: "#C74F33",
  backgroundColor: "#F7F3EE",
  imageName: "the-infinite-coloring-book",
  patternId: null,
  edited: false
};

const initPattern = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern
  });
};

const switchTile = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern,
    edited: true
  });
};

const lockTile = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern,
    edited: true
  });
};

const clearLockedTiles = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern
  });
};

const randomisePattern = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern
  });
};

const updateBackgroundColor = (state, action) => {
  return updateObject(state, {
    backgroundColor: action.backgroundColor,
    activeBackgroundColor: action.activeBackgroundColor,
    edited: true
  });
};

const updatePatternColor = (state, action) => {
  return updateObject(state, {
    patternColor: action.patternColor,
    activePatternColor: action.activePatternColor,
    edited: true
  });
};

const updateImageName = (state, action) => {
  return updateObject(state, {
    imageName: action.name,
    edited: true
  });
};

const updateComplexity = (state, action) => {
  return updateObject(state, {
    complexity: action.complexity,
    pattern: action.pattern,
    columns: action.columns,
    patternId: null,
    edited: false
  });
};

const updateOrientation = (state, action) => {
  return updateObject(state, {
    orientation: action.orientation,
    pattern: action.pattern,
    columns: action.columns,
    patternId: null,
    edited: false
  });
};

const newTemplate = (state, action) => {
  return updateObject(state, {
    pattern: action.pattern,
    columns: action.columns,
    complexity: action.complexity,
    orientation: action.orientation,
    patternId: null,
    edited: false
  });
};

const savedPattern = (state, action) => {
  return updateObject(state, {
    edited: false,
    patternId: action.id
  });
};

const loadPattern = (state, action) => {
  return updateObject(state, {
    ...action.data,
    activePattern: 999,
    lockMode: false,
    activeColorSelection: "pattern",
    edited: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PATTERN:
      return initPattern(state, action);
    case actionTypes.SWITCH_TILE:
      return switchTile(state, action);
    case actionTypes.LOCK_TILE:
      return lockTile(state, action);
    case actionTypes.CLEAR_LOCKED_TILES:
      return clearLockedTiles(state, action);
    case actionTypes.RANDOMISE_PATTERN:
      return randomisePattern(state, action);
    case actionTypes.UPDATE_BACKGROUND_COLOR:
      return updateBackgroundColor(state, action);
    case actionTypes.UPDATE_PATTERN_COLOR:
      return updatePatternColor(state, action);
    case actionTypes.UPDATE_IMAGE_NAME:
      return updateImageName(state, action);
    case actionTypes.UPDATE_COMPLEXITY:
      return updateComplexity(state, action);
    case actionTypes.UPDATE_ORIENTATION:
      return updateOrientation(state, action);
    case actionTypes.NEW_TEMPLATE:
      return newTemplate(state, action);
    case actionTypes.SAVED_PATTERN:
      return savedPattern(state, action);

    case actionTypes.LOAD_PATTERN:
      return loadPattern(state, action);

    default:
      return state;
  }
};

export default reducer;
