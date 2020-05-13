import React, { useContext } from "react";
import { PatternContext } from "../../context/PatternContext";
import styled from "styled-components";
import Pattern from "../Tiles/Tiles";

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(${props => props.columns}, 1fr);
  height: auto;
  width: auto;
  background-color: var(--surface);

  @keyframes in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EditablePattern = props => {
  const { patterns, columns, patternColor, DownloadableImageRef } = useContext(
    PatternContext
  );

  const tiledPatterns = patterns.map((pattern, i) => {
    return (
      <Pattern key={i} id={i} patternColor={patternColor} num={patterns[i]} />
    );
  });

  return (
    <React.Fragment>
      <PatternWrapper columns={columns} ref={DownloadableImageRef}>
        {tiledPatterns}
      </PatternWrapper>
    </React.Fragment>
  );
};

export default EditablePattern;
