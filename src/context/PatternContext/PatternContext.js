import React, { useState, useEffect, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import getRandNum from "../../utility/getRandNum";
import orientations from "./DefaultValues/Orientations/Orientations";
import { allPatterns } from "../../components/Tiles/Tiles";
import { saveAsPng } from "save-html-as-image";

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}
const maxNo = initialMaxNo.length;

const randPatternArray = (columns, rows) => {
  return Array.from({
    length: columns * rows
  }).map(x => getRandNum(maxNo));
};

export const PatternContext = React.createContext();

const PatternContextProvider = props => {
  const DownloadableImageRef = useRef();
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

  const downloadImageHandler = (e, name = "the-infinite-coloring-book") => {
    saveAsPng(DownloadableImageRef.current, {
      filename: name,
      printDate: false
    }).then(() => {
      window.location.reload();
    });
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

  return (
    <PatternContext.Provider
      value={{
        patterns,
        patternColor,
        label,
        orientation,
        columns,
        complexity,
        DownloadableImageRef,

        switchTile: switchTileHandler,
        updateComplexity: updateComplexityHandler,
        updateOrientation: updateOrientationHandler,
        updatePatternColor: updatePatternColorHandler,
        newPattern: generateRandomPattern,
        downloadImage: downloadImageHandler
      }}
    >
      {props.children}
    </PatternContext.Provider>
  );
};

export default PatternContextProvider;
