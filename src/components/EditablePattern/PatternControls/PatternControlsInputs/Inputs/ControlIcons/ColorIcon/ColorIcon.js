import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import { AddCustomColorIcon } from "./ColorIconElements/ColorIconElements";

const ColorSVG = styled.svg`
  ${sharedSvgStyles}
  &:hover {
    transform: scale(1.2);
  }
`;

export const ColorIconDiv = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid var(--dark);
  border-radius: ${props => (props.active ? "50%" : "2px")};
  background: ${props => (props.color ? props.color : "white")};
  transform: scale(${props => (props.active ? 1 : 0.75)})
    rotate(${props => (props.active ? "90deg" : "0deg")});
  transition: all 0.2s ease;
  margin: auto;
  &:hover {
    transform: scale(1);
  }
`;

export const CustomColorIcon = props => {
  return (
    <ColorSVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <AddCustomColorIcon />
    </ColorSVG>
  );
};

export default ColorIconDiv;
