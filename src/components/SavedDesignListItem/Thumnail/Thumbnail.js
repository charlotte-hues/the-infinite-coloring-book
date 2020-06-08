import React from "react";
import styled from "styled-components";
import Pattern from "../../Tiles/Tiles";

const Container = styled.div`
  width: 140px;
  height: 140px;
  background: var(--surface);
  border: 2px solid var(--trim);
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const PatternThumbContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  padding: 1px;
  width: 100%;
  height: 100%;
  max-width: 130px;
  max-height: 130px;
  background-color: ${props => props.backgroundColor};
`;

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: 100px;
  width: 100px;
  color: ${props => props.patternColor};
`;

const Thumnail = ({
  patterns,
  backgroundColor,
  patternColor,
  columns,
  onClick
}) => {
  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern
        key={i}
        id={i}
        patternColor={patternColor}
        num={patterns[i].num}
      />
    );
  });

  return (
    <Container onClick={onClick}>
      <PatternThumbContainer backgroundColor={backgroundColor}>
        <PatternWrapper patternColor={patternColor} columns={columns}>
          {tiledPatterns}
        </PatternWrapper>
      </PatternThumbContainer>
    </Container>
  );
};

export default Thumnail;
