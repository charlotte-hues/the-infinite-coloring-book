import React from "react";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%:
`;

const PatternControlsBody = props => {
  return (
    <StyledDiv>
      <NewPattern
        randomise={props.randomise}
        updateOrientation={props.updateOrientation}
        updateComplexity={props.updateComplexity}
        currentComplexity={props.size}
      />
    </StyledDiv>
  );
};

export default PatternControlsBody;
