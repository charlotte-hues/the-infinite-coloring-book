import React from "react";
import { RotationGroup, DiagonalPath } from "../Styles/Styles";

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
  <RotationGroup rotate="90deg">
    <SquareTR1 />
  </RotationGroup>
);

export const SquareBR2 = props => (
  <RotationGroup rotate="90deg">
    <SquareTR2 />
  </RotationGroup>
);

export const SquareBL1 = props => (
  <RotationGroup rotate="180deg">
    <SquareTR1 />
  </RotationGroup>
);

export const SquareBL2 = props => (
  <RotationGroup rotate="180deg">
    <SquareTR2 />
  </RotationGroup>
);

export const SquareTL1 = props => (
  <RotationGroup rotate="270deg">
    <SquareTR1 />
  </RotationGroup>
);

export const SquareTL2 = props => (
  <RotationGroup rotate="270deg">
    <SquareTR2 />
  </RotationGroup>
);

export const CurvedBR1 = props => (
  <RotationGroup rotate="90deg">
    <CurvedTR1 />
  </RotationGroup>
);

export const CurvedBR2 = props => (
  <RotationGroup rotate="90deg">
    <CurvedTR2 />
  </RotationGroup>
);

export const CurvedBL1 = props => (
  <RotationGroup rotate="180deg">
    <CurvedTR1 />
  </RotationGroup>
);

export const CurvedBL2 = props => (
  <RotationGroup rotate="180deg">
    <CurvedTR2 />
  </RotationGroup>
);

export const CurvedTL1 = props => (
  <RotationGroup rotate="270deg">
    <CurvedTR1 />
  </RotationGroup>
);

export const CurvedTL2 = props => (
  <RotationGroup rotate="270deg">
    <CurvedTR2 />
  </RotationGroup>
);
