import React from "react";
import * as Gems from "../Masks/Masks";
import { SVG, DiagonalPath } from "../Styles/Styles";

const maskProps = child => {
  return child ? "url(#" + child.type.name + child.props.children + ")" : null;
};

export const Diagonal = props => {
  return (
    <SVG viewBox="0 0 40 40" rotate={props.rotate}>
      {props.children}
      <DiagonalPath
        d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30"
        mask={maskProps(props.children)}
      />
    </SVG>
  );
};

export const CrossHatch = props => {
  return (
    <SVG viewBox="0 0 40 40">
      {props.children}
      <DiagonalPath
        d="M0 40L40 8.74227e-07M0 0L40 40M0 10L10 8.74227e-07L40 30L30 40L0 10ZM0 20L20 8.74227e-07L40 20L20 40L0 20ZM0 30L30 8.74227e-07L40 10L10 40L0 30Z"
        mask={maskProps(props.children)}
      />
    </SVG>
  );
};

export const Square = props => (
  <SVG viewBox="0 0 40 40" rotate={props.rotate}>
    <path d="M30 10H1V39H30V10Z" />
    <DiagonalPath d="M0 10L10 0M10 10L20 0M20 10L30 0M30 20L40 10M30 10L40 0M30 30L40 20M30 40L40 30" />
  </SVG>
);

export const CrossHatchWithCircle = props => (
  <CrossHatch>
    <Gems.Circle />
  </CrossHatch>
);

export const DiagonalWithDiamond = props => (
  <Diagonal>
    <Gems.Diamond />
  </Diagonal>
);

export const DiagonalWithCircle = props => (
  <Diagonal>
    <Gems.Circle />
  </Diagonal>
);
