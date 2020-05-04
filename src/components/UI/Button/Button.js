import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid var(--black);
  color: var(--black);
  background: rgba(245, 245, 245, 0);
  border-radius: 4px;
  height: 32px;
  width: 100%;
  min-width: 100px;
  max-width: 500px;
  font-family: "Patua One", cursive;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background: var(--trim);
  }

  &:active {
    transition: all 0s;
    color: var(--orange);
  }
`;

const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
