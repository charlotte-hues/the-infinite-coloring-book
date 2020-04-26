import React from "react";

const ClippingMask = props => {
  console.log(props.children);
  return (
    <React.Fragment>
      <mask
        id={props.children._owner.type.name + props.children.props.children}
        viewBox="0 0 40 40"
        fill="black"
        stroke="none"
      >
        <rect width="100%" height="100%" fill="white" />
        {props.children}
      </mask>
      {props.children}
    </React.Fragment>
  );
};

export const Circle = props => (
  <ClippingMask>
    <circle cx="20" cy="20" r="10" />
  </ClippingMask>
);

export const Letter = props => (
  <ClippingMask>
    <text
      style={{
        x: "40px",
        y: "800px",
        textAnchor: "middle",
        fontWeight: "900",
        fontSize: "2.5em",
        transform: "translate(50%, 85%)"
      }}
    >
      {props.children}
    </text>
  </ClippingMask>
);

export const Diamond = props => (
  <ClippingMask>
    <path d="M20 6L6 20L20 34L34 20L20 6Z" />
  </ClippingMask>
);
