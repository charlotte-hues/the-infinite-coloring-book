import React from "react";
import styled from "styled-components";
import sharedButtonStyles from "./sharedButtonStyles";
import InputWrapper from "../InputWrapper/InputWrapper";

const StyledButton = styled.button`
  ${sharedButtonStyles}
  border: 2px solid ${props =>
    props.disabled ? "var(--trim)" : "var(--black)"};
  color: ${props => (props.disabled ? "var(--trim)" : "var(--black)")};
  background: rgba(245, 245, 245, 0);
  border-radius: 4px;
  height: 32px;
  width: 100%;
  min-width: 100px;
  max-width: 500px;
  font-family: "Patua One", cursive;

  transition: all 0.2s ease-in;

  &.secondary {
    border: 2px solid ${props =>
      props.disabled ? "var(--trim)" : "var(--dark)"};
    color: ${props => (props.disabled ? "var(--trim)" : "var(--dark)")};
    
  } 
 
  &:hover {
    background: ${props => (props.disabled ? "none" : "var(--trim)")};
  }

  &:active {
    transition: all 0s;
    color: var(--orange);
  }
`;

const Button = ({ onClick, disabled, children, secondary }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={secondary ? "secondary" : null}
    >
      {children}
    </StyledButton>
  );
};

export const WrappedButton = ({ onClick, disabled, children, secondary }) => {
  return (
    <InputWrapper>
      <Button onClick={onClick} disabled={disabled} secondary={secondary}>
        {children}
      </Button>
    </InputWrapper>
  );
};

export default Button;
