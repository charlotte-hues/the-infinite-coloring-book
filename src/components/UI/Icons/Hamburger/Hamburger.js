import React from "react";
import styled from "styled-components";
import IconButton from "../../Button/IconButton";

const SVG = styled.svg.attrs({
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
})`
  width: 40px;
  height: 40px;
  cursor: pointer;
  stroke: ${props => props.fillColor};
`;

const HamburgerPath = styled.path`
  stroke-width: 2;
  transition: all 0.2s ease;

  ${SVG}:hover & {
    d: path("M0 20 L20 0 M0 40 L40 0 M40 20 L20 40");
  }
`;

const HamburgerPath2 = styled.path`
  stroke-width: 2;
  transition: all 0.2s ease;

  ${SVG}:hover & {
    d: path("M0 10 L10 0 M0 30 L30 0 M10 40 L40 10 M30 40 L40 30");
  }
`;

const Hamburger = props => (
  <IconButton onClick={props.onClick}>
    <SVG fillColor={props.fillColor}>
      <HamburgerPath d="M0 10 L40 10 M0 20 L40 20 M40 30 L0 30" />
      <HamburgerPath2 d="M0 10 L0 10 M0 30 L0 30 M10 40 L10 40 M30 40 L30 40" />
    </SVG>
  </IconButton>
);

export default Hamburger;
