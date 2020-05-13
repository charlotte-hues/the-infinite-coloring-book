import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../sharedSvgStyles/sharedSvgStyles";
import ColorIconElements from "./ColorIconElements/ColorIconElements";

const GroupSVG = styled.svg`
  ${sharedSvgStyles}
`;

const ColorIcon = props => {
  return (
    <GroupSVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <ColorIconElements fill={props.fill} active={props.active} />
    </GroupSVG>
  );
};

export default ColorIcon;
