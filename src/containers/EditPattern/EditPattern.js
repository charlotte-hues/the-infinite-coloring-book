import React, { useEffect, useState } from "react";
import { allPatterns } from "../../components/Tiles/Tiles";
import EditablePattern from "../../components/EditablePattern/EditablePattern";
import styled from "styled-components";

const PrintPreview = styled.div`
  padding: 10px;
  margin: auto;
  margin-top: 5%;
  width: 35%;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};

  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  @media only screen and (min-width: 600px) {
    width: 65%;
  }
  @media only screen and (min-width: 768px) {
    width: 55%;
  }
  @media only screen and (min-width: 992px) {
    width: 45%;
  }
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-device-width: 480px) {
    width: 90%;
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
    </React.Fragment>
  );
};

export default PatternHero;
