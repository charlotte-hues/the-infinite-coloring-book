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

// close              "M0  20 L0  20   M40 20 L40 20    M10 10 L30 30     M10 30 L30 10"
// closehover         "M0  20 L20  0   M40 20 L20 40    M20 20 L20 20     M0  40 L40  0"
// hamburger          "M3  10 L38 10   M3  20 L38 20    M38 30 L3  30      M20 0 L20  0   M40  0 L40  0    M40 20 L40 20"
// hamburgerhover     "M20 10 L20 10   M20 20 L20 20    M20 30 L20 30      M20 0 L0  20   M40  0 L0  40    M40 20 L20 40"

const HamburgerPath = styled.path`
  stroke-width: 2;
  transition: all 0.2s ease;
  d: ${props =>
    props.close
      ? `path("M0 20 L0  20   M40 20 L40 20     M10 10 L30 30     M10 30 L30 10")`
      : `path("M3  10 L38 10   M3  20 L38 20    M38 30 L3  30     M20 0 L20  0   M40  0 L40  0    M40 20 L40 20")`};

  @media not all and (pointer: coarse) {
    ${SVG}:hover & {
      d: ${props =>
        props.close
          ? `path(
            "M0 20 L20  0   M40 20 L20 40     M20 20 L20 20     M0  40 L40  0"
      )`
          : `path(
            "M20 10 L20 10   M20 20 L20 20    M20 30 L20 30      M20 0 L0  20   M40  0 L0  40    M40 20 L20 40"
      )`};
    }
  }
`;

const HamburgerPath2 = styled.path`
  stroke-width: 2;
  transition: all 0.2s ease;
  d: path("M0 10 L0 10 M0 30 L0 30 M10 40 L10 40 M30 40 L30 40 ");

  @media not all and (pointer: coarse) {
    ${SVG}:hover & {
      d: path("M0 10 L10 0 M0 30 L30 0 M10 40 L40 10 M30 40 L40 30  ");
    }
  }
`;

const Hamburger = props => (
  <IconButton onClick={props.onClick}>
    <SVG fillColor={props.fillColor}>
      <HamburgerPath close={props.closeIcon} />
      <HamburgerPath2 />
    </SVG>
  </IconButton>
);

export default Hamburger;
