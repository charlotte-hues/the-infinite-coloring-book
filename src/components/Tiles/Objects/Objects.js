import React from "react";

export const Crowd = props => (
  <React.Fragment>
    <circle cx="10" cy="5.5" r="5" />
    <circle cx="30" cy="5.5" r="5" />
    <circle cx="20" cy="25" r="5" />
    <circle cx="40" cy="25" r="5" />
    <circle cy="25" r="5" />
    <circle cy="40" r="10" />
    <circle cx="20" cy="40" r="10" />
    <circle cx="40" cy="40" r="10" />
    <path d="M1 20.5C1 15.2533 5.25329 11 10.5 11C15.7467 11 20 15.2533 20 20.5M20 20C20 15.0294 24.2533 11 29.5 11C34.7467 11 39 15.0294 39 20" />
  </React.Fragment>
);

export const Square = props => (
  <React.Fragment>
    <path d="M30 10H0.5V39.5H30V10Z" />
    <path
      d="M0 10L10 0M10.5 9.5L20 0M20.5 9.5L30 0M30.5 19.5L40 10M30.5 9.5L40 0M30.5 29.5L40 20M30 40L40 30"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const Circles = props => (
  <React.Fragment>
    <circle cx="10" cy="10" r="9.5" />
    <circle cx="10" cy="30" r="9.5" />
    <circle cx="30" cy="10" r="9.5" />
    <circle cx="30" cy="30" r="9.5" />
  </React.Fragment>
);

export const Flower = props => (
  <React.Fragment>
    <circle cx="20" cy="20" r="10" />
    <path d="M20 10V0M0 20H10M20 30V40M30 20H40M12.9289 12.9289L5 5M5 35L12.9289 27.0711M27.0711 27.0711L35 35M27.0711 12.9289L35 5" />
    <circle cx="20" cy="20" r="5" />
    <path
      d="M0 10L10 0M30 40L40 30M0 30L10 40M30 0L40 10"
      strokeLinecap="square"
    />
  </React.Fragment>
);

export const BoxCross = props => (
  <React.Fragment>
    <path d="M20 10L30 0L40 10L30 20M20 10L30 20M20 10L10 0L0 10L10 20M20 10L10 20M30 20L20 30M30 20L40 30L30 40L20 30M20 30L10 20M20 30L10 40L0 30L10 20" />
  </React.Fragment>
);

export const DiamondStackH = props => (
  <React.Fragment>
    <path d="M20 19.5L-4.15258e-07 10L20 0.499999L40 10L20 19.5Z" />
    <path d="M29.5 15L40 20L20 29.5L-2.18557e-07 20L10.25 15" />
    <path d="M29.5 25L40 30L20 39.5L-2.18557e-07 30L10.25 25" />
  </React.Fragment>
);

export const DiamondStackV = props => (
  <React.Fragment>
    <path d="M20.5 20L30 -8.30516e-07L39.5 20L30 40L20.5 20Z" />
    <path d="M25 29.5L20 40L10.5 20L20 -4.37114e-07L25 10.25" />
    <path d="M15 29.5L10 40L0.500002 20L10 -4.37114e-07L15 10.25" />
  </React.Fragment>
);

export const Bullseye = props => (
  <React.Fragment>
    <path d="M0 40L6 34" />
    <path d="M0 -2.62268e-07L6 6" />
    <path d="M40 0L34 6" />
    <path d="M40 40L34 34" />
    <circle cx="20" cy="20" r="5" />
    <circle cx="20" cy="20" r="12" />
    <circle cx="20" cy="20" r="19.5" />
  </React.Fragment>
);

export const Eye = props => (
  <React.Fragment>
    <path d="M0 40L6 34" />
    <path d="M0 -2.62268e-07L6 6" />
    <path d="M40 0L34 6" />
    <path d="M40 40L34 34" />
    <circle cx="20" cy="20" r="7" />
    <path d="M0.5 20C5.26065 14.6835 12.3019 11 20 11C27.6999 11 34.7392 14.6813 39.5 20" />
    <path d="M0.5 20C5.25921 25.288 12.3257 29 20 29C27.7055 29 34.7389 25.3253 39.5 20" />
    <circle cx="20" cy="20" r="19.5" />
  </React.Fragment>
);
