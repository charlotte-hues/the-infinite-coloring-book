import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import ColorIconElements, {
  AddCustomColorIcon,
  ActiveSwitch
} from "./ColorIconElements/ColorIconElements";

const ColorSVG = styled.svg`
  ${sharedSvgStyles}
  &:hover {
    transform: scale(1.2);
  }
`;

const SwitchSvg = styled.svg`
  ${sharedSvgStyles}
  width: 41px;
  height: 22px;
  max-width: 41px;
  max-height: 22px;
`;

export const ColorIconDiv = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
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

export const ActiveSelectionSwitch = props => (
  <SwitchSvg
    width="40"
    height="20"
    viewBox="0 0 41 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ActiveSwitch active={props.active} />
  </SwitchSvg>
);

const ColorIcon = props => {
  return (
    <ColorSVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <ColorIconElements
        pattern={props.pattern}
        background={props.background}
        active={props.active}
      />
    </ColorSVG>
  );
};

export const CustomColorIcon = props => {
  return (
    <ColorSVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <AddCustomColorIcon />
    </ColorSVG>
  );
};

export default ColorIcon;
