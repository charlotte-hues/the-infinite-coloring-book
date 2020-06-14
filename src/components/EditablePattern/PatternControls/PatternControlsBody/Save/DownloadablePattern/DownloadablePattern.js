import React from "react";
import styled from "styled-components";
import Pattern from "../../../../../Tiles/Tiles";

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: auto;
  width: auto;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
`;

const DownloadablePattern = React.forwardRef((props, ref) => {
  const { patterns, columns, patternColor, backgroundColor } = props;

  const tiledPatterns = patterns.map((_, i) => {
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
    <React.Fragment>
      <PatternWrapper
        columns={columns}
        ref={ref}
        backgroundColor={backgroundColor}
      >
        {tiledPatterns}
      </PatternWrapper>
    </React.Fragment>
  );
});

export default DownloadablePattern;
