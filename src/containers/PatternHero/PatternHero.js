import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pattern, { allPatterns } from "../../components/Tiles/Tiles";

const PrintName = styled.footer`
  display: none;

  @media print {
    display: block;
    color: grey;
    bottom: 0;
    text-align: left;
  }
`;

const PatternWrapper = styled.div`
  z-index: 10;
  padding: 10px;
  margin: auto;
  margin-top: 5vh;
  width: 35vw;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);

  @media only screen and (max-width: 600px) {
    width: 85vw;
  }

  @media only screen and (min-width: 600px) {
    width: 65vw;
  }

  @media only screen and (min-width: 768px) {
    width: 55vw;
  }

  @media only screen and (min-width: 992px) {
    width: 45vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 30vw;
  }

  @media print {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    color: #fff;
    box-shadow: none;

    #header,
    #footer {
      display: none;
    }

    @page {
      margin: 1cm;
    }
  }
`;

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(" ");
}
const maxNo = initialMaxNo.length;

const getRandNum = number => Math.floor(Math.random() * Math.floor(number));

const PatternHero = props => {
  const [columns, setColumns] = useState(6);
  const [patterns, setPatterns] = useState([]);
  const [patternColor, setPatternColor] = useState("#2c3e50");
  const [backgroundColor, setBackgroundColor] = useState("#F5F5F5");

  useEffect(() => {
    const newPattern = [];
    for (let i = 0; i <= columns * 8 - 1; i++) {
      newPattern.push({ num: getRandNum(maxNo) });
    }
    setPatterns(newPattern);
  }, [columns]);

  const randomiseHandler = () => {};

  const openPrintModal = () => {};

  const closePrintModal = () => {};

  const openLoginModal = () => {};

  const closeLoginModal = () => {};

  const switchOrientationHandler = () => {};

  const updateComplexityHandler = () => {};

  const clickHandler = e => {
    const updatedPattern = [...patterns];
    updatedPattern[e.target.id].num = getRandNum(maxNo);
    setPatterns(updatedPattern);
  };

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={patternColor}
        num={pattern.num}
        click={clickHandler}
      />
    );
  });

  return (
    <React.Fragment>
      <PatternWrapper
        columns={columns}
        backgroundColor={backgroundColor}
        columns={columns}
      >
        {tiledPatterns}
        <PrintName>Charlotte</PrintName>
      </PatternWrapper>
    </React.Fragment>
  );
};

export default PatternHero;
