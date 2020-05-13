import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const Circles = props => (
  <React.Fragment>
    <circle cx="10" cy="30" r="9" />
    <circle cx="10" cy="10" r="9" />
    <circle cx="30" cy="10" r="9" />
    <circle cx="30" cy="30" r="9" />
  </React.Fragment>
);

export const CrossGrid = props => {
  return (
    <React.Fragment>
      <path d="M0 10H40M0 20H40M0 30H40M10 40L10 0M20 40V0M30 40V0" />
    </React.Fragment>
  );
};

export const BoxCross = props => (
  <React.Fragment>
    <DiagonalPath d="M20 10L30 0L40 10L30 20M20 10L30 20M20 10L10 0L0 10L10 20M20 10L10 20M30 20L20 30M30 20L40 30L30 40L20 30M20 30L10 20M20 30L10 40L0 30L10 20" />
  </React.Fragment>
);

export const Dashes = props => (
  <React.Fragment>
    <path d="M-1 10H7M41 10H33M-1 20H7M41 20H33M-1 30H7M41 30H33M10 41V33M10 -1V7M20 41V33M20 -1V7M30 41V33M30 -1V7M10 13V17M13 10H17M10 23V27M13 20H17M23 20H27M23 10H27M20 13V17M30 13V17M30 23V27M20 23V27M23 30H27M17 30H13" />
  </React.Fragment>
);

export const CrossGridWithCircles = props => (
  <React.Fragment>
    <path d="M-1 10H7M41 10H33M-1 20H7M41 20H33M-1 30H7M41 30H33M10 41V33M10 -1V7M20 41V33M20 -1V7M30 41V33M30 -1V7M10 13V17M13 10H17M10 23V27M13 20H17M23 20H27M23 10H27M20 13V17M30 13V17M30 23V27M20 23V27M23 30H27M17 30H13" />
    <circle cx="10" cy="10" r="3" />
    <circle cx="10" cy="20" r="3" />
    <circle cx="10" cy="30" r="3" />
    <circle cx="20" cy="30" r="3" />
    <circle cx="30" cy="20" r="3" />
    <circle cx="30" cy="30" r="3" />
    <circle cx="20" cy="20" r="3" />
    <circle cx="20" cy="10" r="3" />
    <circle cx="30" cy="10" r="3" />
  </React.Fragment>
);

export const SquareCorners = props => (
  <React.Fragment>
    <path d="M-1 10H6M41 10H34M-1 30H6M41 30H34M10 41V34M10 -1V6M30 41V34M30 -1V6" />
    <rect x="6" y="24" width="10" height="10" />
    <rect x="6" y="6" width="10" height="10" />
    <rect x="24" y="24" width="10" height="10" />
    <rect x="24" y="6" width="10" height="10" />
  </React.Fragment>
);
