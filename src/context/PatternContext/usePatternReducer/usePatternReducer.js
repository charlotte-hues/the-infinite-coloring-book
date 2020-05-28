import randPatternArray, {
  maxNo,
  getColumns
} from "../DefaultValues/RandPatternArray/RandPatternArray";
import getRandNum from "../../../utility/getRandNum";
import { updateStorage } from "../../../utility/getLocalStorage";

const switchTile = (state, index, event) => {
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
  const newPattern = randPatternArray(state.orientation, newComplexity).map(
    num => {
      return { num: num, locked: false };
    }
  );
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
  const newPattern = randPatternArray(newOrientation, state.complexity).map(
    num => {
      return { num: num, locked: false };
    }
  );
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
  console.log("NEW PATTERN");
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
      console.log("SWITCH TILE");
      return switchTile(state, action.index, action.event);
    case "LOCK-TILE":
      return lockTile(state, action.index);
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

export default reducer;