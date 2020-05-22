import React from "react";
import styled from "styled-components";
import MinimiseButtonIcon from "./MinimiseButtonIcon/MinimiseButtonIcon";

const StyledMinimiseButton = styled.button`
  display: ${props => (props.visible ? "block" : "none")};
  position: relative;
  bottom: ${props => (props.visible ? 0 : "-40px")};
  background: none;
  border: none;
  color: var(--black);
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: translateY(22px);
  margin: auto;

  svg {
    -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.11));
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.11));
  }

  &:hover {
    color: var(--orange);
    transform: scale(1.1) translateY(18px);

    svg {
      path {
        fill: var(--orange);
      }
    }
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
    <MinimiseButtonIcon />
  </StyledMinimiseButton>
);

export default MinimiseButton;
