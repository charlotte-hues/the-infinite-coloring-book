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

export const CrossGrid = props => {
  return (
    <SVG viewBox="0 0 40 40">
      <path d="M0 10H40M0 20H40M0 30H40M10 40L10 0M20 40V0M30 40V0" />
    </SVG>
  );
};

export const DiamondDots = props => (
  <SVG viewBox="0 0 40 40">
    <DiagonalPath d="M6 10L10 6L14 10L10 14L6 10Z" />
    <DiagonalPath d="M16 10L20 6L24 10L20 14L16 10Z" />
    <DiagonalPath d="M26 10L30 6L34 10L30 14L26 10Z" />
    <DiagonalPath d="M6 20L10 16L14 20L10 24L6 20Z" />
    <DiagonalPath d="M16 20L20 16L24 20L20 24L16 20Z" />
    <DiagonalPath d="M26 20L30 16L34 20L30 24L26 20Z" />
    <DiagonalPath d="M6 30L10 26L14 30L10 34L6 30Z" />
    <DiagonalPath d="M16 30L20 26L24 30L20 34L16 30Z" />
    <DiagonalPath d="M26 30L30 26L34 30L30 34L26 30Z" />
  </SVG>
);

export const BoxCross = props => (
  <SVG viewBox="0 0 40 40">
    <DiagonalPath d="M20 10L30 0L40 10L30 20M20 10L30 20M20 10L10 0L0 10L10 20M20 10L10 20M30 20L20 30M30 20L40 30L30 40L20 30M20 30L10 20M20 30L10 40L0 30L10 20" />
  </SVG>
);

export const Dashes = props => (
  <SVG viewBox="0 0 40 40">
    <path d="M-1 10H7M41 10H33M-1 20H7M41 20H33M-1 30H7M41 30H33M10 41V33M10 -1V7M20 41V33M20 -1V7M30 41V33M30 -1V7M10 13V17M13 10H17M10 23V27M13 20H17M23 20H27M23 10H27M20 13V17M30 13V17M30 23V27M20 23V27M23 30H27M17 30H13" />
  </SVG>
);

export const CircleGrid = props => (
  <SVG viewBox="0 0 40 40">
    <circle cx="10" cy="10" r="3" />
    <circle cx="10" cy="20" r="3" />
    <circle cx="10" cy="30" r="3" />
    <circle cx="20" cy="30" r="3" />
    <circle cx="30" cy="20" r="3" />
    <circle cx="30" cy="30" r="3" />
    <circle cx="20" cy="20" r="3" />
    <circle cx="20" cy="10" r="3" />
    <circle cx="30" cy="10" r="3" />
  </SVG>
);
