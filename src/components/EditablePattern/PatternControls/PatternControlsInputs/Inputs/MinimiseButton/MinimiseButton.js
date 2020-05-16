import React from "react";
import styled from "styled-components";

const StyledMinimiseButton = styled.button`
  display: ${props => (props.visible ? "block" : "none")};
  position: relative;
  bottom: ${props => (props.visible ? 0 : "100%")};
  background: none;
  border: none;
  color: var(--trim);
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--orange);
    transform: scale(1.1);
  }

  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

const MinimiseButton = props => (
  <StyledMinimiseButton
    onClick={props.onClick}
    visible={props.visible}
    disabled={!props.visible}
  >
    {props.children}
  </StyledMinimiseButton>
);

export default MinimiseButton;
