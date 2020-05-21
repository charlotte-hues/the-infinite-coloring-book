import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const SquareTR1 = props => (
  <React.Fragment>
    <path d="M0 30L10 30L10 40M0 20L20 20L20 40M0 10L30 10L30 40" />
    <path
      d="M10 0L19.5 9.5M20 0L40 20M30 0L40 10M30.5 20.5L40 30M30.5 30.5L40 40M0 0L9.5 9.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareTR2 = props => (
  <React.Fragment>
    <path d="M0 30H10V40M0 20H20V40M0 10H30V" />
    <path
      d="M0.5 9.5L10 0M10.5 9.5L20 0M20.5 9.5L30 0M30.5 19.5L40 10M30.5 9.5L40 0M30.5 29.5L40 20M30.5 39.5L40 30"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareBR1 = props => (
  <React.Fragment>
    <path d="M10 -8.74228e-07L10 10L-4.37114e-07 10M20 -4.37114e-07L20 20L-8.74228e-07 20M30 0L30 30L-1.31134e-06 30" />
    <path
      d="M40 10L30.5 19.5M40 20L20 40M40 30L30 40M19.5 30.5L10 40M9.5 30.5L-1.74846e-06 40M40 0L30.5 9.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareBR2 = props => (
  <React.Fragment>
    <path d="M10 -8.74228e-07L10 10L-4.37114e-07 10M20 -4.37114e-07L20 20L-8.74228e-07 20M30 0L30 30L-1.31134e-06 30" />
    <path
      d="M30.5 0.500001L40 10M30.5 10.5L40 20M30.5 20.5L40 30M20.5 30.5L30 40M30 30L40 40M10.5 30.5L20 40M0.499999 30.5L10 40"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareBL1 = props => (
  <React.Fragment>
    <path d="M40 10L30 10L30 -8.74228e-07M40 20L20 20L20 -1.74846e-06M40 30L10 30L10 -2.62268e-06" />
    <path
      d="M39.5 30.5L30 40M29.5 30.5L20 40M19.5 30.5L10 40M9.5 20.5L8.74228e-07 30M9.5 30.5L0 40M9.5 10.5L1.74846e-06 20M9.5 0.499997L2.62268e-06 10"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareBL2 = props => (
  <React.Fragment>
    <path d="M40 10L30 10L30 -8.74228e-07M40 20L20 20L20 -1.74846e-06M40 30L10 30L10 -2.62268e-06" />
    <path
      d="M30 40L20.5 30.5M20 40L1.74846e-06 20M10 40L8.74228e-07 30M9.50001 19.5L2.62268e-06 10M9.5 9.5L3.49691e-06 -3.49691e-06M40 40L30.5 30.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareTL1 = props => (
  <React.Fragment>
    <path d="M30 40L30 30L40 30M20 40L20 20L40 20M10 40L10 10L40 10" />
    <path
      d="M1.31134e-06 30L9.5 20.5M2.62268e-06 20L20 2.62268e-06M3.93403e-06 10L10 1.31134e-06M20.5 9.50001L30 3.93403e-06M30.5 9.50001L40 5.24537e-06M0 40L9.5 30.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const SquareTL2 = props => (
  <React.Fragment>
    <path d="M30 40L30 30L40 30M20 40L20 20L40 20M10 40L10 10L40 10" />
    <path
      d="M1.31134e-06 30L9.5 20.5M2.62268e-06 20L20 2.62268e-06M3.93403e-06 10L10 1.31134e-06M20.5 9.50001L30 3.93403e-06M30.5 9.50001L40 5.24537e-06M0 40L9.5 30.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedTR1 = props => (
  <React.Fragment>
    <path
      d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40"
      strokeLinecap="square"
    />
    <path
      d="M10 0L0.5 9.5M20 0L9 11M30 0L16 14M40 0L21.5 18.5M40 10L26 24M40 20L29 31M40 30L30.5 39.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedTR2 = props => (
  <React.Fragment>
    <path
      d="M10 0L40 30M20 0L40 20M30 0L40 10M12.5 12.5L0 0M40 40L27.5 27.5"
      strokeLinecap="square"
    />
    <path
      d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedBR1 = props => (
  <React.Fragment>
    <path
      d="M40 10L10 40M40 20L20 40M40 30L30 40M27.5 12.5L40 0M-1.74846e-06 40L12.5 27.5"
      strokeLinecap="square"
    />
    <path
      d="M10 -8.74228e-07C10 5.52285 5.52285 10 -4.37114e-07 10M20 -4.37114e-07C20 11.0457 11.0457 20 -8.74228e-07 20M30 0C30 16.5685 16.5685 30 -1.31134e-06 30"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedBR2 = props => (
  <React.Fragment>
    <path
      d="M10 -8.74228e-07C10 5.52285 5.52285 10 -4.37114e-07 10M20 -4.37114e-07C20 11.0457 11.0457 20 -8.74228e-07 20M30 0C30 16.5685 16.5685 30 -1.31134e-06 30"
      strokeLinecap="square"
    />
    <path
      d="M40 10L30.5 0.5M40 20L29 9M40 30L26 16M40 40L21.5 21.5M30 40L16 26M20 40L9 29M10 40L0.499999 30.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedBL1 = props => (
  <React.Fragment>
    <path
      d="M40 10C34.4772 10 30 5.52285 30 -8.74228e-07M40 20C28.9543 20 20 11.0457 20 -1.74846e-06M40 30C23.4315 30 10 16.5685 10 -2.62268e-06"
      strokeLinecap="square"
    />
    <path
      d="M30 40L39.5 30.5M20 40L31 29M10 40L24 26M0 40L18.5 21.5M8.74228e-07 30L14 16M1.74846e-06 20L11 9M2.62268e-06 10L9.5 0.499997"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedBL2 = props => (
  <React.Fragment>
    <path
      d="M30 40L2.62268e-06 10M20 40L1.74846e-06 20M10 40L8.74228e-07 30M27.5 27.5L40 40M3.49691e-06 -3.49691e-06L12.5 12.5"
      strokeLinecap="square"
    />
    <path
      d="M40 10C34.4772 10 30 5.52285 30 -8.74228e-07M40 20C28.9543 20 20 11.0457 20 -1.74846e-06M40 30C23.4315 30 10 16.5685 10 -2.62268e-06"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedTL1 = props => (
  <React.Fragment>
    <path
      d="M1.31134e-06 30L30 3.93403e-06M2.62268e-06 20L20 2.62268e-06M3.93403e-06 10L10 1.31134e-06M12.5 27.5L0 40M40 5.24537e-06L27.5 12.5"
      strokeLinecap="square"
    />
    <path
      d="M30 40C30 34.4772 34.4772 30 40 30M20 40C20 28.9543 28.9543 20 40 20M10 40C10 23.4315 23.4315 10 40 10"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const CurvedTL2 = props => (
  <React.Fragment>
    <path
      d="M30 40C30 34.4772 34.4772 30 40 30M20 40C20 28.9543 28.9543 20 40 20M10 40C10 23.4315 23.4315 10 40 10"
      strokeLinecap="square"
    />
    <path
      d="M1.24577e-06 30L9.5 39.5M2.55712e-06 20L11 31M3.86846e-06 10L14 24M5.1798e-06 0L18.5 18.5M10 1.31134e-06L24 14M20 2.62268e-06L31 11M30 3.93403e-06L39.5 9.5"
      strokeLinecap="square"
    />
  </React.Fragment>
);
