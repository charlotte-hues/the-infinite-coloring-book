import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import orientations from "./DefaultValues/Orientations/Orientations";
import randPatternArray, {
  maxNo
} from "./DefaultValues/RandPatternArray/RandPatternArray";
import getRandNum from "../../utility/getRandNum";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const PatternContextProvider = props => {
  const [patterns, setPatterns] = useLocalStorage(
    "patterns",
    randPatternArray(4, 5)
  );
  const [orientation, setOrientation] = useLocalStorage(
    "orientation",
    "portrait"
  );
  const [complexity, setComplexity] = useLocalStorage("complexity", 0);
  const [columns, setColumns] = useState();
  const [patternColor, setPatternColor] = useLocalStorage(
    "patternColour",
    "#E1DBD2"
  );
  const [backgroundColor, setBackgroundColor] = useLocalStorage(
    "backgroundColor",
    "F7F3EE"
  );
  const [label] = useLocalStorage("label", "Charlotte");
  const [imageName, setImageName] = useLocalStorage(
    "imageName",
    "the-infinite-coloring-book"
  );

  const updateComplexityHandler = newComplexity => {
    setComplexity(newComplexity);
    generateRandomPattern(orientation, newComplexity);
  };

  const updateOrientationHandler = newOrientation => {
    setOrientation(newOrientation);
    generateRandomPattern(newOrientation, complexity);
  };

  const updatePatternColorHandler = newColor => {
    setPatternColor(newColor);
  };

  const generateRandomPattern = (orientation, complexity) => {
    const newPattern = randPatternArray(
      orientations[orientation][complexity][0],
      orientations[orientation][complexity][1]
    );
    setPatterns(newPattern);
  };

  const switchTileHandler = index => {
    const updatedPattern = [...patterns];
    let newNum = getRandNum(maxNo);
    while (patterns[index] === newNum) {
      newNum = getRandNum(maxNo);
    }
    updatedPattern[index] = newNum;
    setPatterns(updatedPattern);
  };

  useEffect(() => {
    setColumns(orientations[orientation][complexity][0]);
  }, [orientation, complexity]);

  const state = {
    patterns,
    patternColor,
    label,
    orientation,
    columns,
    complexity
  };

  const dispatch = {
    switchTile: switchTileHandler,
    updateComplexity: updateComplexityHandler,
    updateOrientation: updateOrientationHandler,
    updatePatternColor: updatePatternColorHandler,
    newPattern: generateRandomPattern
  };

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default PatternContextProvider;
