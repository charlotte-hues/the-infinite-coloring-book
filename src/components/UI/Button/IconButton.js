import React from "react";
import styled from "styled-components";
import sharedButtonStyles from "./sharedButtonStyles";

const StyledIconButton = styled.button`
  ${sharedButtonStyles}
  position: relative;
  height: 40px;
  border: 0;
  padding: 4px 0;
  max-height: 40px;
  margin: 10px;

  &:after {
    position: absolute;
    content: "";
    height: 2px;
    /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
    bottom: -10px;

    /* center - (optional) use with adjusting width   */
    margin: 0 auto;
    left: 0;
    right: 0;
    width: ${props => (props.disabled && props.heading ? "100%" : "0%")};
    background: var(--orange);

    /* optional animation */
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

export const IconButton = props => (
  <StyledIconButton
    onClick={props.onClick}
    disabled={props.disabled}
    heading={props.heading}
  >
    {props.children}
  </StyledIconButton>
);

export default IconButton;
