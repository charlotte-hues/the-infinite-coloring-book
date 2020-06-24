import React from "react";

export const Diagonal = props => {
  return (
    <React.Fragment>
      {props.children}
      <path d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30" />
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

export const CornerCap = () => (
  <React.Fragment>
    <path d="M30 8.74228e-07C30 5.52285 34.4772 10 40 10" />
    <path d="M10 40C10 34.4772 5.52285 30 0 30" />
    <path d="M-8.74228e-07 20C11.0457 20 20 28.9543 20 40" />
    <path d="M40 20C28.9543 20 20 11.0457 20 2.62268e-06" />
    <path
      d="M0 9.99999L10 10C10 6.66667 10 -4.37114e-07 10 -4.37114e-07"
      strokeLinecap="square"
    />
    <path d="M40 30L30 30C30 33.3333 30 40 30 40" strokeLinecap="square" />
  </React.Fragment>
);

export const CornerCapAlt = () => (
  <React.Fragment>
    <path d="M40 30C34.4772 30 30 34.4772 30 40" />
    <path d="M-4.37114e-07 10C5.52285 10 10 5.52285 10 0" />
    <path d="M20 0C20 11.0457 11.0457 20 0 20" />
    <path d="M20 40C20 28.9543 28.9543 20 40 20" />
    <path d="M30 0L30 10C33.3333 10 40 10 40 10" strokeLinecap="square" />
    <path
      d="M9.99999 40L10 30C6.66667 30 8.74227e-07 30 8.74227e-07 30"
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
