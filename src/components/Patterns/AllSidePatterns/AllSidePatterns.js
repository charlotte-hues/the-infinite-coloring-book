import React from "react";
import { SVG, DiagonalPath } from "../Styles/Styles";

export const Circles = props => (
  <SVG viewBox="0 0 40 40">
    <circle cx="10" cy="30" r="9" />
    <circle cx="10" cy="10" r="9" />
    <circle cx="30" cy="10" r="9" />
    <circle cx="30" cy="30" r="9" />
  </SVG>
);

export const CrossGrid = props => (
  <SVG viewBox="0 0 40 40">
    <path d="M0 10H40" />
    <path d="M0 20H40" />
    <path d="M0 30H40" />
    <path d="M10 40L10 0" />
    <path d="M20 40L20 0" />
    <path d="M30 40L30 0" />
  </SVG>
);

export const Square = props => (
  <SVG viewBox="0 0 40 40">
    <path d="M30 10H1V39H30V10Z" />
    <DiagonalPath d="M0 10L10 0M10 10L20 0M20 10L30 0M30 20L40 10M30 10L40 0M30 30L40 20M30 40L40 30" />
  </SVG>
);

export const Diagonal = props => (
  <SVG viewBox="0 0 40 40">
    {props.children}
    <DiagonalPath
      d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30"
      mask="url(#Mask)"
    />
  </SVG>
);

export const Gem = props => (
  <defs>
    <clipPath id="Mask">
      <circle width="10" height="10" />
    </clipPath>
  </defs>
);
