import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const CurvedTR1 = props => (
  <React.Fragment>
    <path d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40" />
    <DiagonalPath d="M10 0L0 10M20 0L9 11M30 0L15.5 14.5M40 0L21.5 18.5M40 10L25.5 24.5M40 20L29 31M40 30L30 40" />
  </React.Fragment>
);

export const CurvedTR2 = props => (
  <React.Fragment>
    <path d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40" />
    <DiagonalPath d="M27 27L40 40M0 0L13 13M10 0L40 30M20 0L40 20M30 0L40 10" />
  </React.Fragment>
);

export const SquareTR1 = props => (
  <React.Fragment>
    <path d="M0 30H10V40M0 20H20V40M0 10H30V40" />
    <DiagonalPath d="M0 10L10 0M10 10L20 0M20 10L30 0M30 20L40 10M30 10L40 0M30 30L40 20M30 40L40 30" />
  </React.Fragment>
);

export const SquareTR2 = props => (
  <React.Fragment>
    <path d="M0 30H10V40M0 20H20V40M0 10H30V40" />
    <DiagonalPath d="M31 31L40 40M0 0L9 9M10 0L19 9M40 30L31 21M20 0L40 20M30 0L40 10" />
  </React.Fragment>
);

export const SquareBR1 = props => (
  <React.Fragment>
    <path d="M10 -8.74228e-07L10 10L-4.37114e-07 10M20 -4.37114e-07L20 20L-8.74228e-07 20M30 0L30 30L-1.31134e-06 30" />
    <path d="M30 -4.37114e-07L40 10M30 10L40 20M30 20L40 30M20 30L30 40M30 30L40 40M10 30L20 40M-1.31134e-06 30L10 40" />
  </React.Fragment>
);

export const SquareBR2 = props => (
  <React.Fragment>
    <path d="M10 -8.74228e-07L10 10L-4.37114e-07 10M20 -4.37114e-07L20 20L-8.74228e-07 20M30 0L30 30L-1.31134e-06 30" />
    <path d="M40 10L30 20M40 20L20 40M40 30L30 40M20 30L10 40M10 30L-1.74846e-06 40M40 0L30 10" />
  </React.Fragment>
);

export const SquareBL1 = props => (
  <React.Fragment>
    <path d="M40 10L30 10L30 -8.74228e-07M40 20L20 20L20 -1.74846e-06M40 30L10 30L10 -2.62268e-06" />
    <path d="M40 30L30 40M30 30L20 40M20 30L10 40M10 20L8.74228e-07 30M10 30L0 40M10 10L1.74846e-06 20M10 -2.62268e-06L2.62268e-06 10" />
  </React.Fragment>
);

export const SquareBL2 = props => (
  <React.Fragment>
    <path d="M40 10L30 10L30 -8.74228e-07M40 20L20 20L20 -1.74846e-06M40 30L10 30L10 -2.62268e-06" />
    <path d="M30 40L20 30M20 40L1.74846e-06 20M10 40L8.74228e-07 30M10 20L2.62268e-06 10M10 10L3.49691e-06 -3.49691e-06M40 40L30 30" />
  </React.Fragment>
);

export const SquareTL1 = props => (
  <React.Fragment>
    <path d="M30 40L30 30L40 30M20 40L20 20L40 20M10 40L10 10L40 10" />
    <path d="M10 40L1.31134e-06 30M10 30L2.62268e-06 20M10 20L3.93403e-06 10M20 10L10 1.31134e-06M10 10L5.24537e-06 0M30 10L20 2.62268e-06M40 10L30 3.93403e-06" />
  </React.Fragment>
);

export const SquareTL2 = props => (
  <React.Fragment>
    <path d="M30 40L30 30L40 30M20 40L20 20L40 20M10 40L10 10L40 10" />
    <path d="M1.31134e-06 30L10 20M2.62268e-06 20L20 2.62268e-06M3.93403e-06 10L10 1.31134e-06M20 10L30 3.93403e-06M30 10L40 5.24537e-06M0 40L10 30" />
  </React.Fragment>
);

export const CurvedBR1 = props => (
  <React.Fragment>
    <path d="M10 -8.74228e-07C10 5.52285 5.52285 10 -4.37114e-07 10M20 -4.37114e-07C20 11.0457 11.0457 20 -8.74228e-07 20M30 0C30 16.5685 16.5685 30 -1.31134e-06 30" />
    <path d="M40 10L30 -4.37114e-07M40 20L29 9M40 30L25.5 15.5M40 40L21.5 21.5M30 40L15.5 25.5M20 40L9 29M10 40L-1.31134e-06 30" />
  </React.Fragment>
);

export const CurvedBR2 = props => (
  <React.Fragment>
    <path d="M40 10L10 40M40 20L20 40M40 30L30 40M28 12L40 0M-1.74846e-06 40L12 28" />
    <path d="M10 -8.74228e-07C10 5.52285 5.52285 10 -4.37114e-07 10M20 -4.37114e-07C20 11.0457 11.0457 20 -8.74228e-07 20M30 0C30 16.5685 16.5685 30 -1.31134e-06 30" />
  </React.Fragment>
);

export const CurvedBL1 = props => (
  <React.Fragment>
    <path d="M40 10C34.4772 10 30 5.52285 30 -8.74228e-07M40 20C28.9543 20 20 11.0457 20 -1.74846e-06M40 30C23.4315 30 10 16.5685 10 -2.62268e-06" />
    <path d="M30 40L40 30M20 40L31 29M10 40L24.5 25.5M0 40L18.5 21.5M8.74228e-07 30L14.5 15.5M1.74846e-06 20L11 9M2.62268e-06 10L10 -2.62268e-06" />
  </React.Fragment>
);

export const CurvedBL2 = props => (
  <React.Fragment>
    <path d="M30 40L2.62268e-06 10M20 40L1.74846e-06 20M10 40L8.74228e-07 30M28 28L40 40M3.49691e-06 -3.49691e-06L12 12" />
    <path d="M40 10C34.4772 10 30 5.52285 30 -8.74228e-07M40 20C28.9543 20 20 11.0457 20 -1.74846e-06M40 30C23.4315 30 10 16.5685 10 -2.62268e-06" />
  </React.Fragment>
);

export const CurvedTL1 = props => (
  <React.Fragment>
    <path d="M30 40C30 34.4772 34.4772 30 40 30M20 40C20 28.9543 28.9543 20 40 20M10 40C10 23.4315 23.4315 10 40 10" />
    <path d="M1.31134e-06 30L10 40M2.62268e-06 20L11 31M3.93403e-06 10L14.5 24.5M5.24537e-06 0L18.5 18.5M10 1.31134e-06L24.5 14.5M20 2.62268e-06L31 11M30 3.93403e-06L40 10" />
  </React.Fragment>
);

export const CurvedTL2 = props => (
  <React.Fragment>
    <path d="M1.31134e-06 30L30 3.93403e-06M2.62268e-06 20L20 2.62268e-06M3.93403e-06 10L10 1.31134e-06M12 28L0 40M40 5.24537e-06L28 12" />
    <path d="M30 40C30 34.4772 34.4772 30 40 30M20 40C20 28.9543 28.9543 20 40 20M10 40C10 23.4315 23.4315 10 40 10" />
  </React.Fragment>
);
