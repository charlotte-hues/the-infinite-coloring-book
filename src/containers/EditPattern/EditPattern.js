import React, { useEffect, useState, useContext } from "react";
import PatternContextProvider, {
  PatternContext
} from "../../context/PatternContext";
import { allPatterns } from "../../components/Tiles/Tiles";
import PrintPreview from "../../components/EditablePattern/PrintPreview/PrintPreview";
import styled from "styled-components";
import PatternControls from "../../components/EditablePattern/PatternControls/PatternControls";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  @media print {
    height: auto;
  }
`;

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}

// const initialOrientation = {
//   portrait: [
//     [5, 7],
//     [6, 8]
//   ],
//   landscape: [
//     [7, 5],
//     [8, 6]
//   ],
//   square: [
//     [5, 5],
//     [6, 6]
//   ]
// };

const maxNo = initialMaxNo.length;

const getRandNum = number => Math.floor(Math.random() * Math.floor(number));

const EditPattern = props => {
  const patternContext = useContext(PatternContext);
  const { updateComplexity, orientation, columns, rows } = patternContext;
  console.log(patternContext);

  const [patterns, setPatterns] = useState([{ num: getRandNum(maxNo) }]);
  // const [complexity] = useState(0);
  // const [orientation] = useState(initialOrientation.portrait[complexity]);
  // const [columns] = useState(initialOrientation[orientation][complexity][0]);
  // const [rows] = useState(initialOrientation[orientation][complexity][1]);

  const [patternColor] = useState("var(--trim)");
  const [backgroundColor] = useState("var(--surface)");
  const [label] = useState("Charlotte");

  const randomiseHandler = () => {
    const newRandomPattern = [...patterns].map(pattern => {
      return { ...pattern, num: getRandNum(maxNo) };
    });
    setPatterns(newRandomPattern);
  };

  const switchOrientationHandler = () => {};

  const updateComplexityHandler = () => {};

  useEffect(() => {
    updateComplexity(1);
    const newPattern = [];
    for (let i = 0; i <= columns * rows - 1; i++) {
      newPattern.push({ num: getRandNum(maxNo) });
    }
    setPatterns(newPattern);
  }, [columns, rows]);

  const switchTileHandler = e => {
    const updatedPattern = [...patterns];
    let newNum = getRandNum(maxNo);
    while (patterns[e.target.id].num === newNum) {
      newNum = getRandNum(maxNo);
    }
    updatedPattern[e.target.id].num = newNum;
    setPatterns(updatedPattern);
  };

  return (
    <PatternContextProvider>
      <Container>
        <PrintPreview
          backgroundColor={backgroundColor}
          columns={columns}
          patternColor={patternColor}
          label={label}
          patterns={patterns}
          switchTile={switchTileHandler}
          orientation={orientation}
        />
        <PatternControls
          // size={orientation}
          updateOrientation={switchOrientationHandler}
          updateComplexity={updateComplexityHandler}
          randomise={randomiseHandler}
        />
      </Container>
    </PatternContextProvider>
  );
};

export default EditPattern;
