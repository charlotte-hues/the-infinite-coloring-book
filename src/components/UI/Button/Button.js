import React from "react";
import styled, { css } from "styled-components";

const sharedStyles = css`
  background: rgba(245, 245, 245, 0);
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${sharedStyles}
  border: 2px solid var(--black);
  color: var(--black);
  background: rgba(245, 245, 245, 0);
  border-radius: 4px;
  height: 32px;
  width: 100%;
  min-width: 100px;
  max-width: 500px;
  font-family: "Patua One", cursive;

  transition: all 0.2s ease-in;

  &:hover {
    background: var(--trim);
  }

  &:active {
    transition: all 0s;
    color: var(--orange);
  }
`;

const StyledIconButton = styled.button`
  ${sharedStyles}
  width: 60px;
  height: 60px;
  border: 0;
`;

const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export const IconButton = props => (
  <StyledIconButton onClick={props.onClick} disabled={props.disabled}>
    {props.children}
  </StyledIconButton>
);

export default Button;
