import React from "react";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
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
