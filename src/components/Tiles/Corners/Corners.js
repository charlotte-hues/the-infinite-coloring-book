import React from "react";
import { SVG, DiagonalPath } from "../Styles/Styles";

export const Curved = props => {
  const background = props.switchBackground ? (
    <DiagonalPath d="M10 0L0 10M20 0L9 11M30 0L15.5 14.5M40 0L21.5 18.5M40 10L25.5 24.5M40 20L29 31M40 30L30 40" />
  ) : (
    <DiagonalPath d="M27 27L40 40M0 0L13 13M10 0L40 30M20 0L40 20M30 0L40 10" />
  );
  return (
    <SVG rotate={props.rotate} viewBox="0 0 40 40">
      <path d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40" />
      {background}
    </SVG>
  );
};

export const Square = props => {
  const background = props.switchBackground ? (
    <DiagonalPath d="M0 10L10 0M10 10L20 0M20 10L30 0M30 20L40 10M30 10L40 0M30 30L40 20M30 40L40 30" />
  ) : (
    <DiagonalPath d="M31 31L40 40M0 0L9 9M10 0L19 9M40 30L31 21M20 0L40 20M30 0L40 10" />
  );
  return (
    <SVG rotate={props.rotate} viewBox="0 0 40 40">
      <path d="M0 30H10V40M0 20H20V40M0 10H30V40" />
      {background}
    </SVG>
  );
};
