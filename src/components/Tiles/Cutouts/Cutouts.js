import React from "react";

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

export const CrosshatchCircleCutout = props => (
  <React.Fragment>
    <path
      d="M10 40L-4.37114e-07 30M20 40L-8.74228e-07 20M30 40L20.5 30.5M-1.31134e-06 10L9.5 19.5M40 40L27.5 27.5M-1.74846e-06 0L12.5 12.5M40 30L30.5 20.5M10 -4.37114e-07L19.5 9.5M20 -8.74228e-07L40 20M40 10L30 -1.31134e-06"
      strokeLinecap="square"
    />
    <path
      d="M0 10L10 0M0 20L20 0M0 30L9.5 20.5M30 0L20.5 9.5M0 40L12.5 27.5M40 0L27.5 12.5M10 40L19.5 30.5M40 10L30.5 19.5M40 20L20 40M30 40L40 30"
      strokeLinecap="square"
    />
    <circle cx="20" cy="20" r="10" />
  </React.Fragment>
);

export const CrosshatchSquareCutout = props => (
  <React.Fragment>
    <path
      d="M0 40L10 30M40 8.74227e-07L30 10M0 0L10 10M40 40L30 30M10 30L20 40L30 30M10 30L0 20L20 8.74227e-07L30 10M30 30L40 20L30 10M0 10L10 8.74227e-07L20 10L30 8.74227e-07L40 10L30 20L40 30L30 40L20 30L10 40L0 30L10 20L0 10Z"
      strokeLinecap="square"
    />
    <rect x="10.5" y="10.5" width="19" height="19" />
  </React.Fragment>
);

export const CrosshatchCrossCutout = props => (
  <React.Fragment>
    <path
      d="M0 40L10 30M40 8.74227e-07L30 10M0 0L10 10M40 40L30 30M10 30L20 40L30 30M10 30L0 20L20 8.74227e-07L30 10M30 30L40 20L30 10M0 10L10 8.74227e-07L20 10L30 8.74227e-07L40 10L30 20L40 30L30 40L20 30L10 40L0 30L10 20L0 10Z"
      strokeLinecap="square"
    />
  </React.Fragment>
);
