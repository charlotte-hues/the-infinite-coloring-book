import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const Diagonal = props => {
  return (
    <React.Fragment>
      {props.children}
      <DiagonalPath d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30" />
    </React.Fragment>
  );
};

export const Diagonal2 = props => (
  <React.Fragment>
    <path
      d="M10 40L-4.37114e-07 30M20 40L-8.74228e-07 20M30 40L-1.31134e-06 10M40 40L-1.74846e-06 0M40 30L10 -4.37114e-07M20 -8.74228e-07L40 20M40 10L30 -1.31134e-06"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const DiagonalCut = props => (
  <React.Fragment>
    <path
      d="M0 10L10 0M0 20L20 0M0 30L9.5 20.5L19.5 30.5L10 40M30 0L20.5 9.5L30.5 19.5L40 10M0 40L10 30M40 0L30 10M40 20L20 40M30 40L40 30"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const DiagonalCutAlt = props => (
  <React.Fragment>
    <path
      d="M10 40L-4.37114e-07 30M20 40L-8.74228e-07 20M30 40L20.5 30.5L30.5 20.5L40 30M-1.31134e-06 10L9.5 19.5L19.5 9.5L10 -4.37114e-07M40 40L30 30M-1.74846e-06 0L10 10M20 -8.74228e-07L40 20M40 10L30 -1.31134e-06"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const DiagonalDiamondCutout = props => (
  <React.Fragment>
    <path
      d="M0 10L10 0M0 20L20 0M0 30L8 22M30 0L22.5 7.5M0 40L13 27M40 0L27.5 12.5M10 40L18 32M40 10L32.5 17.5M40 20L20 40M30 40L40 30"
      strokeLinecap="square"
    />
    <rect
      x="20.1421"
      y="5.85791"
      width="20"
      height="20"
      transform="rotate(45 20.1421 5.85791)"
    />
  </React.Fragment>
);

export const DiagonalDiamondCutoutAlt = props => (
  <React.Fragment>
    <path
      d="M10 40L-4.37114e-07 30M20 40L-8.74228e-07 20M30 40L22 32M-1.31134e-06 10L7.5 17.5M40 40L27 27M-1.74846e-06 0L12.5 12.5M40 30L32 22M10 -4.37114e-07L17.5 7.5M20 -8.74228e-07L40 20M40 10L30 -1.31134e-06"
      strokeLinecap="square"
    />
    <rect
      x="5.85791"
      y="19.8579"
      width="20"
      height="20"
      transform="rotate(-45 5.85791 19.8579)"
    />
  </React.Fragment>
);

export const DiagonalCircleCutout = props => (
  <React.Fragment>
    <path
      d="M0 10L10 0M0 20L20 0M0 30L9.5 20.5M30 0L20.5 9.5M0 40L12.5 27.5M40 0L27.5 12.5M10 40L19.5 30.5M40 10L30.5 19.5M40 20L20 40M30 40L40 30"
      strokeLinecap="square"
    />
    <circle cx="20" cy="20" r="10" />
  </React.Fragment>
);

export const DiagonalCircleCutoutAlt = props => (
  <React.Fragment>
    <path
      d="M10 40L-4.37114e-07 30M20 40L-8.74228e-07 20M30 40L20.5 30.5M-1.31134e-06 10L9.5 19.5M40 40L27.5 27.5M-1.74846e-06 0L12.5 12.5M40 30L30.5 20.5M10 -4.37114e-07L19.5 9.5M20 -8.74228e-07L40 20M40 10L30 -1.31134e-06"
      strokeLinecap="square"
    />
    <circle cx="20" cy="20" r="10" />
  </React.Fragment>
);

export const Zigzag1 = props => (
  <React.Fragment>
    <path d="M0 30L10 39.5L20 30L30 39.5L40 30" strokeLinecap="square" />
    <path d="M0 20L10 29.5L20 20L30 29.5L40 20" strokeLinecap="square" />
    <path d="M0 10L10 19.5L20 10L30 19.5L40 10" strokeLinecap="square" />
    <path d="M0 0L10 9.5L20 0L30 9.5L40 0" />
  </React.Fragment>
);

export const Zigzag2 = props => (
  <React.Fragment>
    <path d="M30 40L39.5 30L30 20L39.5 10L30 0" strokeLinecap="square" />
    <path d="M20 40L29.5 30L20 20L29.5 10L20 0" strokeLinecap="square" />
    <path d="M10 40L19.5 30L10 20L19.5 10L10 0" strokeLinecap="square" />
    <path d="M0 40L9.5 30L-8.74228e-07 20L9.5 10L-1.74846e-06 0" />
  </React.Fragment>
);

export const Zigzag3 = props => (
  <React.Fragment>
    <path
      d="M40 10L30 0.499999L20 10L10 0.499997L0 10"
      strokeLinecap="square"
    />
    <path d="M40 20L30 10.5L20 20L10 10.5L0 20" strokeLinecap="square" />
    <path d="M40 30L30 20.5L20 30L10 20.5L0 30" strokeLinecap="square" />
    <path d="M40 40L30 30.5L20 40L10 30.5L0 40" />
  </React.Fragment>
);

export const Zigzag4 = props => (
  <React.Fragment>
    <path d="M10 0L0.5 10L10 20L0.499999 30L10 40" strokeLinecap="square" />
    <path d="M20 0L10.5 10L20 20L10.5 30L20 40" strokeLinecap="square" />
    <path d="M30 0L20.5 10L30 20L20.5 30L30 40" strokeLinecap="square" />
    <path d="M40 0L30.5 10L40 20L30.5 30L40 40" />
  </React.Fragment>
);
