import React from "react";

export const CrossGrid = props => {
  return (
    <React.Fragment>
      <path d="M0 10H40M0 20H40M0 30H40M10 40L10 0M20 40V0M30 40V0" />
    </React.Fragment>
  );
};

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
    <path d="M0 10H6 M40 10H34 M0 30H6 M40 30H34 M10 40V34 M10 0V6 M30 40V34 M30 0V6" />
    <rect x="6" y="24" width="10" height="10" />
    <rect x="6" y="6" width="10" height="10" />
    <rect x="24" y="24" width="10" height="10" />
    <rect x="24" y="6" width="10" height="10" />
  </React.Fragment>
);

export const CrossGridSquare = props => (
  <React.Fragment>
    <path d="M0 10H40M0 20H10M40 20H30M0 30H40M10 40L10 0M20 40V30M20 0V10M30 40V0" />
  </React.Fragment>
);

export const CrossHatch = props => (
  <React.Fragment>
    <path
      d="M0 40L40 8.74227e-07M0 0L40 40M0 10L10 8.74227e-07L40 30L30 40L0 10ZM0 20L20 8.74227e-07L40 20L20 40L0 20ZM0 30L30 8.74227e-07L40 10L10 40L0 30Z"
      strokeLinecap="square"
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

export const CircleTrack = props => (
  <React.Fragment>
    <path d="M0 30H10V40M30 40V30H40M30 0V10H40M0 10H10V0" />
    <path d="M0 20H6" />
    <path d="M34 20H40" />
    <path d="M20 6L20 0" />
    <path d="M20 40L20 34" />
    <circle cx="20" cy="20" r="5" />
    <circle cx="20" cy="20" r="12" />
  </React.Fragment>
);

export const DiamondTrack = props => (
  <React.Fragment>
    <path d="M0 30H10V40M30 40V30H40M30 0V10H40M0 10H10V0" />
    <path d="M0 20H6" />
    <path d="M34 20H40" />
    <path d="M20 6L20 0" />
    <path d="M20 40L20 34" />
    <rect
      x="20.1421"
      y="6"
      width="20"
      height="20"
      transform="rotate(45 20.1421 6)"
    />
    <path d="M14 20L20 14L26 20L20 26L14 20Z" />
  </React.Fragment>
);

export const JoinCircle = props => (
  <React.Fragment>
    <path d="M10 40C10 34.4772 5.52285 30 0 30" />
    <path d="M40 30C34.4772 30 30 34.4772 30 40" />
    <path d="M30 8.74228e-07C30 5.52285 34.4772 10 40 10" />
    <path d="M-4.37114e-07 10C5.52285 10 10 5.52285 10 0" />
    <circle cx="20" cy="20" r="10" />
    <path d="M0 20L10 20" />
    <path d="M30 20H40" />
    <path d="M20 40L20 30" />
    <path d="M20 10L20 2.38419e-07" />
  </React.Fragment>
);

export const JoinCurve = props => (
  <React.Fragment>
    <path d="M10 40C10 34.4772 5.52285 30 0 30" />
    <path d="M40 30C34.4772 30 30 34.4772 30 40" />
    <path d="M30 8.74228e-07C30 5.52285 34.4772 10 40 10" />
    <path d="M-4.37114e-07 10C5.52285 10 10 5.52285 10 0" />
    <path d="M20 0C20 11.0457 11.0457 20 0 20" />
    <path d="M-8.74228e-07 20C11.0457 20 20 28.9543 20 40" />
    <path d="M20 40C20 28.9543 28.9543 20 40 20" />
    <path d="M40 20C28.9543 20 20 11.0457 20 -8.74228e-07" />
  </React.Fragment>
);

export const JoinCircleCap = props => (
  <React.Fragment>
    <path d="M30 40C30 34.4772 25.5228 30 20 30C14.4772 30 10 34.4772 10 40" />
    <path d="M10 -1.74846e-06C10 5.52285 14.4772 10 20 10C25.5228 10 30 5.52285 30 0" />
    <path d="M40 10C34.4772 10 30 14.4772 30 20C30 25.5228 34.4772 30 40 30" />
    <path d="M-8.74228e-07 30C5.52285 30 10 25.5228 10 20C10 14.4772 5.52285 10 0 10" />
  </React.Fragment>
);

export const JoinDiamondCap = props => (
  <React.Fragment>
    <path d="M-8.74228e-07 30L10 20L0 10" strokeLinecap="square" />
    <path d="M30 40L20 30L10 40" strokeLinecap="square" />
    <path d="M40 10L30 20L40 30" strokeLinecap="square" />
    <path d="M10 -1.74846e-06L20 10L30 0" strokeLinecap="square" />
    <path d="M0 0L40 40" />
    <path d="M40 0L-1.74846e-06 40" />
  </React.Fragment>
);
