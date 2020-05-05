import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const formControlWrapper = props => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default formControlWrapper;
