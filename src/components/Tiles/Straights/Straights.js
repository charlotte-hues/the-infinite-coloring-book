import React from "react";

export const Horizontal = props => (
  <React.Fragment>
    <path
      d="M30 40L39.5 30.5M20 40L29.5 30.5M10 40L19.5 30.5M0 40L9.5 30.5M40 0L30.5 9.5M30 -4.37114e-07L20.5 9.5M20 -8.74228e-07L10.5 9.5M0.500001 9.5L10 -1.31134e-06"
      strokeLinecap="square"
    />
    <path d="M0 30H40M0 10H40M0 20H40" />
  </React.Fragment>
);

export const Horizontal2 = props => (
  <React.Fragment>
    <path
      d="M10 40L0.5 30.5M20 40L10.5 30.5M30 40L20.5 30.5M40 40L30.5 30.5M-1.74846e-06 0L9.5 9.5M10 -4.37114e-07L19.5 9.5M20 -8.74228e-07L29.5 9.5M39.5 9.5L30 -1.31134e-06"
      strokeLinecap="square"
    />
    <path d="M0 30H40M0 10H40M0 20H40" />
  </React.Fragment>
);

export const Vertical = props => (
  <React.Fragment>
    <path
      d="M0 10L9.5 0.5M0 20L9.5 10.5M0 30L9.5 20.5M0 40L9.5 30.5M40 0L30.5 9.5M40 10L30.5 19.5M40 20L30.5 29.5M30.5 39.5L40 30"
      strokeLinecap="square"
    />
    <path d="M10 -8.74228e-07L10 40M30 0L30 40M20 -4.37114e-07L20 40" />
  </React.Fragment>
);

export const Vertical2 = props => (
  <React.Fragment>
    <path
      d="M40 10L30.5 0.5M40 20L30.5 10.5M40 30L30.5 20.5M40 40L30.5 30.5M0 0L9.5 9.5M0 10L9.5 19.5M0 20L9.5 29.5M9.5 39.5L0 30"
      strokeLinecap="square"
    />
    <path d="M30 40L30 -8.74228e-07M10 40L10 0M20 40L20 -4.37114e-07" />
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

export const BubblesH = props => (
  <React.Fragment>
    <circle cx="10" cy="15" r="5" />
    <circle cx="10" cy="25" r="5" />
    <circle cy="15" r="5" />
    <circle cy="25" r="5" />
    <circle cx="20" cy="15" r="5" />
    <circle cx="20" cy="25" r="5" />
    <circle cx="30" cy="15" r="5" />
    <circle cx="30" cy="25" r="5" />
    <circle cx="40" cy="15" r="5" />
    <circle cx="40" cy="25" r="5" />
    <path
      d="M30 40L39.5 30.5M20 40L29.5 30.5M10 40L19.5 30.5M0 40L9.5 30.5M40 0L30.5 9.5M30 -4.37114e-07L20.5 9.5M20 -8.74228e-07L10.5 9.5M0.500001 9.5L10 -1.31134e-06"
      strokeLinecap="square"
    />
  </React.Fragment>
);
