import * as actionTypes from "./actionTypes";
import randPatternArray, {
  maxNo
  //   getColumns
} from "../../context/PatternContext/DefaultValues/RandPatternArray/RandPatternArray";
import { getRandNum } from "../../shared/utility";
// import axios from "axios";

export const initPattern = () => {
  const pattern = randPatternArray("square", 2).map(num => {
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
