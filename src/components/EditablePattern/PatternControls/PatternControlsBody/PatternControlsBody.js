import React from "react";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const PatternControlsBody = props => {
  return (
    <StyledDiv>
      <NewPattern />
    </StyledDiv>
  );
};

export default PatternControlsBody;
