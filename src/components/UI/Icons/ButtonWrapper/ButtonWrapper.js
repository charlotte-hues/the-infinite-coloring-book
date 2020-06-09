import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 0;

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = props => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

export default ButtonWrapper;
