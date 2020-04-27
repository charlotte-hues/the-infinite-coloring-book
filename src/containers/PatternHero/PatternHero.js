import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pattern, { allPatterns } from "../../components/Tiles/Patterns";

const PatternWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);

  @media only screen and (max-width: 600px) {
    grid: auto-flow / repeat(4, 1fr);
  }

  @media only screen and (min-width: 600px) {
    grid: auto-flow / repeat(4, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid: auto-flow / repeat(6, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid: auto-flow / repeat(8, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid: auto-flow / repeat(10, 1fr);
  }
`;

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(" ");
}

const getRandNum = number => Math.floor(Math.random() * Math.floor(number));

const PatternHero = props => {
  const [maxNo, setMaxNo] = useState(initialMaxNo.length - 1);
  const [columns, setColumns] = useState(6);
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const newPattern = [];
    for (let i = 0; i <= columns * 3 - 1; i++) {
      newPattern.push({ id: i, num: getRandNum(maxNo) });
    }
    setPatterns(newPattern);
  }, [columns]);

  const tiledPatterns = patterns.map((pattern, i) => {
    return <Pattern />;
  });

  return <PatternWrapper columns={columns}>{tiledPatterns}</PatternWrapper>;
};

export default PatternHero;
