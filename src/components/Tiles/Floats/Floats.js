import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const DiamondDots = props => (
  <React.Fragment>
    <DiagonalPath d="M6 10L10 6L14 10L10 14L6 10Z" />
    <DiagonalPath d="M16 10L20 6L24 10L20 14L16 10Z" />
    <DiagonalPath d="M26 10L30 6L34 10L30 14L26 10Z" />
    <DiagonalPath d="M6 20L10 16L14 20L10 24L6 20Z" />
    <DiagonalPath d="M16 20L20 16L24 20L20 24L16 20Z" />
    <DiagonalPath d="M26 20L30 16L34 20L30 24L26 20Z" />
    <DiagonalPath d="M6 30L10 26L14 30L10 34L6 30Z" />
    <DiagonalPath d="M16 30L20 26L24 30L20 34L16 30Z" />
    <DiagonalPath d="M26 30L30 26L34 30L30 34L26 30Z" />
  </React.Fragment>
);

export const CircleGrid = props => (
  <React.Fragment>
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

export const Circle = props => (
  <React.Fragment>
    <circle cx="20" cy="20" r="10" />
  </React.Fragment>
);

export const Diamond = props => (
  <React.Fragment>
    <path d="M20 6L6 20L20 34L34 20L20 6Z" />
  </React.Fragment>
);

export const Letter = props => (
  <React.Fragment>
    <text
      style={{
        x: "40px",
        y: "800px",
        textAnchor: "middle",
        fontWeight: "900",
        fontSize: "2.5em",
        transform: "translate(50%, 85%)"
      }}
    >
      {props.children}
    </text>
  </React.Fragment>
);
