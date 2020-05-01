import React, { useEffect, useState } from "react";
import { allPatterns } from "../../components/Tiles/Tiles";
import EditablePattern from "../../components/EditablePattern/EditablePattern";
import styled from "styled-components";

const PrintPreview = styled.div`
  padding: 10px;
  margin: auto;
  margin-top: 10vh;
  // width: 35%;
  height: 80vh;
  width: auto;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};

  @media only screen and (max-width: 600px) {
    width: 85%;
    height: auto;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: 80vh;
    width: 60vh;
  }
  @media only screen and (min-width: 992px) {
    height: 80vh;
    width: 60vh;
  }
  @media only screen and (min-width: 1200px) {
    height: 80vh;
    width: 60vh;
  }
  @media screen and (max-device-width: 480px) {
    width: 90%;
    height: auto;
  }

  @media print {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    box-shadow: none;

    @page {
      margin: 1cm;
    }
  }
`;

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
  const [patternColor] = useState("var(--red)");
  const [backgroundColor] = useState("rgba(255,255,255,0.6)");
  const [label] = useState("Charlotte");

  const randomiseHandler = () => {
    const newRandomPattern = [...patterns].map(pattern => {
      return { ...pattern, num: getRandNum(maxNo) };
    });
    setPatterns(newRandomPattern);
  };

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
    let newNum = getRandNum(maxNo);
    while (patterns[e.target.id].num === newNum) {
      newNum = getRandNum(maxNo);
    }
    updatedPattern[e.target.id].num = newNum;
    setPatterns(updatedPattern);
  };

  return (
    <React.Fragment>
      <PrintPreview backgroundColor={backgroundColor}>
        <EditablePattern
          columns={columns}
          patternColor={patternColor}
          label={label}
          patterns={patterns}
          switchTile={switchTileHandler}
        />
      </PrintPreview>
      <button onClick={randomiseHandler}>RANDOMISE</button>
    </React.Fragment>
  );
};

export default PatternHero;
