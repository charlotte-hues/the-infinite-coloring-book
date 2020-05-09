import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import getRandNum from "../utility/getRandNum";
import { allPatterns } from "../components/Tiles/Tiles";

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}
const maxNo = initialMaxNo.length;

const initialOrientation = {
  portrait: [
    [4, 5],
    [5, 7],
    [6, 8]
  ],
  landscape: [
    [5, 4],
    [7, 5],
    [8, 6]
  ],
  square: [
    [4, 4],
    [5, 5],
    [6, 6]
  ]
};

const randPatternArray = (columns, rows) => {
  return Array.from({
    length: columns * rows
  }).map(x => getRandNum(maxNo));
};

export const PatternContext = React.createContext();

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
  const [patternColor] = useLocalStorage("patternColour", "var(--orange)");
  const [label] = useLocalStorage("label", "Charlotte");

  const [columns, setColumns] = useState();

  const updateComplexityHandler = newComplexity => {
    setComplexity(newComplexity);
    generateRandomPattern(orientation, newComplexity);
  };

  const updateOrientationHandler = newOrientation => {
    setOrientation(newOrientation);
    generateRandomPattern(newOrientation, complexity);
  };

  const generateRandomPattern = (orientation, complexity) => {
    const newPattern = randPatternArray(
      initialOrientation[orientation][complexity][0],
      initialOrientation[orientation][complexity][1]
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
    setColumns(initialOrientation[orientation][complexity][0]);
  }, [orientation, complexity]);

  return (
    <PatternContext.Provider
      value={{
        patterns,
        patternColor,
        label,
        orientation,
        columns,
        complexity,

        switchTile: switchTileHandler,
        updateComplexity: updateComplexityHandler,
        updateOrientation: updateOrientationHandler,
        newPattern: generateRandomPattern
      }}
    >
      {props.children}
    </PatternContext.Provider>
  );
};

export default PatternContextProvider;
