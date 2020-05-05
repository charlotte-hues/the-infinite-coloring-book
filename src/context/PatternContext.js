import React, { useState, useEffect } from "react";
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

export const PatternContext = React.createContext();

const PatternContextProvider = props => {
  const [patterns, setPatterns] = useState([4]);
  const [orientation, setOrientation] = useState("portrait");
  const [complexity, setComplexity] = useState(0);
  const [columns, setCols] = useState(4);
  const [rows, setRows] = useState(5);
  const [patternColor] = useState("var(--trim)");
  const [label] = useState("Charlotte");

  const updateComplexityHandler = val => {
    setComplexity(val);
    setCols(initialOrientation[orientation][val][0]);
    setRows(initialOrientation[orientation][val][1]);
  };

  const updateOrientationHandler = orientation => {
    setOrientation(orientation);
    setCols(initialOrientation[orientation][complexity][0]);
    setRows(initialOrientation[orientation][complexity][1]);
  };

  const generateRandomPattern = () => {
    const randPatternArray = Array.from({ length: columns * rows }).map(x =>
      getRandNum(maxNo)
    );
    setPatterns(randPatternArray);
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
    generateRandomPattern();
  }, [columns, rows]);

  return (
    <PatternContext.Provider
      value={{
        patterns,
        patternColor,
        label,
        orientation,
        columns,

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
