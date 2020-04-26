import React from "react";
import { SVG, DiagonalPath } from "../Styles/Styles";

export const CrossGrid = props => {
  return (
    <SVG viewBox="0 0 40 40">
      {props.children}
      <path
        d="M0 10H40M0 20H40M0 30H40M10 40L10 0M20 40V0M30 40V0"
        mask={
          props.children
            ? "url(#" +
              props.children.type.name +
              props.children.props.children +
              ")"
            : null
        }
      />
    </SVG>
  );
};

export const Diagonal = props => {
  return (
    <SVG viewBox="0 0 40 40" rotate={props.rotate}>
      {props.children}
      <DiagonalPath
        d="M0 10L10 0M0 20L20 0M0 30L30 0M0 40L40 0M10 40L40 10M40 20L20 40M30 40L40 30"
        mask={
          props.children
            ? "url(#" +
              props.children.type.name +
              props.children.props.children +
              ")"
            : null
        }
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

export const Circles = props => (
  <SVG viewBox="0 0 40 40">
    <circle cx="10" cy="30" r="9" />
    <circle cx="10" cy="10" r="9" />
    <circle cx="30" cy="10" r="9" />
    <circle cx="30" cy="30" r="9" />
  </SVG>
);
