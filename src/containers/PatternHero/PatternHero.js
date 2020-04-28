import React, { useEffect, useState } from "react";
import { allPatterns } from "../../components/Tiles/Tiles";
import EditablePattern from "../../components/EditablePattern/EditabledPattern";

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}

const maxNo = initialMaxNo.length;

const getRandNum = number => Math.floor(Math.random() * Math.floor(number));

const PatternHero = props => {
  const [patterns, setPatterns] = useState([{ num: getRandNum(maxNo) }]);
  const [columns] = useState(6);
  const [rows] = useState(8);
  const [patternColor] = useState("#2c3e50");
  const [backgroundColor] = useState("#F5F5F5");
  const [label] = useState("Charlotte");

  // const randomiseHandler = () => {};

  // const openPrintModal = () => {};

  // const closePrintModal = () => {};

  // const openLoginModal = () => {};

  // const closeLoginModal = () => {};

  // const switchOrientationHandler = () => {};

  // const updateComplexityHandler = () => {};

  useEffect(() => {
    const newPattern = [];
    for (let i = 0; i <= columns * rows - 1; i++) {
      newPattern.push({ num: getRandNum(maxNo) });
    }
    setPatterns(newPattern);
  }, [columns, rows]);

  const switchTileHandler = e => {
    const updatedPattern = [...patterns];
    updatedPattern[e.target.id].num = getRandNum(maxNo);
    setPatterns(updatedPattern);
  };

  return (
    <React.Fragment>
      <EditablePattern
        columns={columns}
        rows={rows}
        backgroundColor={backgroundColor}
        patternColor={patternColor}
        maxNo={maxNo}
        label={label}
        patterns={patterns}
        switchTile={switchTileHandler}
      />
    </React.Fragment>
  );
};

export default PatternHero;
