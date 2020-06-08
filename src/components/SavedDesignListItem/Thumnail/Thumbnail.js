import React from "react";
import styled from "styled-components";
import Pattern from "../../Tiles/Tiles";

const Container = styled.div`
  width: 140px;
  height: 140px;
  padding: 1px;
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
  max-height: ${props =>
    props.orientation === "portrait"
      ? "130px"
      : props.orientation === "landscape"
      ? "100px"
      : "120px"};
  max-width: ${props =>
    props.orientation === "portrait"
      ? "90px"
      : props.orientation === "landscape"
      ? "130px"
      : "120px"};
  background-color: ${props => props.backgroundColor};
  border: 2px solid var(--trim);
  box-shadow: var(--shadowSmall);

  &:hover {
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }
`;

const PatternWrapper = styled.div`
  margin: auto;
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: ${props =>
    props.orientation === "portrait"
      ? "110px"
      : props.orientation === "landscape"
      ? "90px"
      : "110px"};
  width: ${props =>
    props.orientation === "portrait"
      ? "80px"
      : props.orientation === "landscape"
      ? "110px"
      : "110px"};
  color: ${props => props.patternColor};
`;

const Thumnail = ({
  patterns,
  backgroundColor,
  patternColor,
  columns,
  onClick,
  orientation
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
      <PatternThumbContainer
        orientation={orientation}
        backgroundColor={backgroundColor}
      >
        <PatternWrapper
          patternColor={patternColor}
          columns={columns}
          orientation={orientation}
        >
          {tiledPatterns}
        </PatternWrapper>
      </PatternThumbContainer>
    </Container>
  );
};

export default Thumnail;
