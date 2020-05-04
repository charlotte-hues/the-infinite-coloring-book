import React, { useState } from "react";

// const [patterns, setPatterns] = useState([{ num: getRandNum(maxNo) }]);
// const [complexity] = useState(0);
// const [orientation] = useState(initialOrientation.portrait[complexity]);
// const [columns] = useState(orientation[0]);
// const [rows] = useState(orientation[1]);

const initialOrientation = {
  portrait: [
    [5, 7],
    [6, 8]
  ],
  landscape: [
    [7, 5],
    [8, 6]
  ],
  square: [
    [5, 5],
    [6, 6]
  ]
};

export const PatternContext = React.createContext({
  complexity: 0,
  orientation: "portrait",
  updateComplexity: () => {},
  columns: 5,
  rows: 7
});

const PatternContextProvider = props => {
  const [complexity, setComplexity] = useState(1);
  const [ori, setOrientation] = useState("landscape");
  const [columns, setCols] = useState(6);
  const [rows, setRows] = useState(7);

  const complexityHandler = val => {
    console.log(val);
    // setCols(initialOrientation[ori][val][0]);
    // setRows(initialOrientation[ori][val][1]);
  };
  return (
    <PatternContext.Provider
      value={{
        complexity,
        orientation: ori,
        updateComplexity: complexityHandler,
        rows,
        columns
      }}
    >
      {props.children}
    </PatternContext.Provider>
  );
};

export default PatternContextProvider;
