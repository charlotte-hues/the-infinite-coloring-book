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

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: ${props =>
    props.direction === "vertical" ? "column" : "row"};
  justify-content: space-between;
  width: ${props => (props.direction === "vertical" ? "auto" : "100%")};
  height: ${props => (props.direction === "vertical" ? "100%" : "auto")};
  padding-bottom: 0px;
  border-bottom: none;
`;

export const IconsHeadContainer = styled(IconsContainer)`
  height: 60px;
  padding-bottom: 8px;
  border-bottom: ${props => (props.open ? "2px solid var(--trim)" : "none")};
`;

export default IconButton;
