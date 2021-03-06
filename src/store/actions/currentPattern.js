import * as actionTypes from "./actionTypes";
import randPatternArray, {
  maxNo,
  getColumns
} from "../../shared/RandPatternArray/RandPatternArray";
import { getRandNum } from "../../shared/utility";

export const initPattern = (orientation, complexity) => {
  const pattern = randPatternArray(orientation, complexity).map(num => {
    return { num: num, locked: false };
  });
  return {
    type: actionTypes.INIT_PATTERN,
    pattern: pattern
  };
};

export const switchTile = (index, currentPattern, activePattern) => {
  if (currentPattern[index].locked) return;
  const updatedPattern = [...currentPattern];
  let newNum;
  if (activePattern < 900) {
    newNum = activePattern;
  } else {
    newNum = getRandNum(maxNo);
    while (currentPattern[index].num === newNum) {
      newNum = getRandNum(maxNo);
    }
  }
  updatedPattern[index].num = newNum;

  return {
    type: actionTypes.SWITCH_TILE,
    pattern: updatedPattern
  };
};

export const lockTile = (index, currentPattern) => {
  const updatedPattern = [...currentPattern];
  updatedPattern[index].locked = !currentPattern[index].locked;
  return {
    type: actionTypes.LOCK_TILE,
    pattern: updatedPattern
  };
};

export const clearLockedTiles = currentPattern => {
  const updatedPattern = currentPattern.map(patternObj => {
    return { ...patternObj, locked: false };
  });
  return {
    type: actionTypes.CLEAR_LOCKED_TILES,
    pattern: updatedPattern
  };
};

export const randomisePattern = currentPattern => {
  const newpattern = currentPattern.map(pattern => {
    const newNum = pattern.locked ? pattern.num : getRandNum(maxNo);
    return { num: newNum, locked: pattern.locked };
  });
  return {
    type: actionTypes.RANDOMISE_PATTERN,
    pattern: newpattern
  };
};

export const updateColor = (index, color, activeColorSelection) => {
  const type =
    activeColorSelection === "pattern"
      ? {
          type: actionTypes.UPDATE_PATTERN_COLOR,
          activePatternColor: index,
          patternColor: color
        }
      : {
          type: actionTypes.UPDATE_BACKGROUND_COLOR,
          activeBackgroundColor: index,
          backgroundColor: color
        };
  return { ...type };
};

export const updateImageName = name => {
  return {
    type: actionTypes.UPDATE_IMAGE_NAME,
    name: name
  };
};

export const updateComplexity = (orientation, complexity) => {
  const newPattern = randPatternArray(orientation, complexity).map(num => {
    return { num: num, locked: false };
  });
  const columns = getColumns(orientation, complexity);
  return {
    type: actionTypes.UPDATE_COMPLEXITY,
    complexity: complexity,
    pattern: newPattern,
    columns: columns
  };
};

export const updateOrientation = (orientation, complexity) => {
  const newPattern = randPatternArray(orientation, complexity).map(num => {
    return { num: num, locked: false };
  });
  const columns = getColumns(orientation, complexity);
  return {
    type: actionTypes.UPDATE_ORIENTATION,
    orientation: orientation,
    pattern: newPattern,
    columns: columns
  };
};

export const newTemplate = template => {
  return {
    type: actionTypes.NEW_TEMPLATE,
    pattern: template.patterns,
    columns: template.columns,
    complexity: template.complexity,
    orientation: template.orientation
  };
};

export const loadPattern = data => {
  return {
    type: actionTypes.LOAD_PATTERN,
    data: { ...data.patternData },
    createdDate: data.createdDate,
    id: data.id
  };
};
