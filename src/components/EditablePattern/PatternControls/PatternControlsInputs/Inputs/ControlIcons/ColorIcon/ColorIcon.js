import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import ColorIconElements from "./ColorIconElements/ColorIconElements";

const ColorSVG = styled.svg`
  ${sharedSvgStyles}
  &:hover {
    transform: scale(1.2);
  }
`;

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

export default ColorIcon;
