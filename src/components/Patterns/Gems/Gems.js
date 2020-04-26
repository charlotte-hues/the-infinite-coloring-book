import React from "react";

const ClippingMask = props => {
  console.log(props.children);
  return (
    <React.Fragment>
      <mask id="Mask" viewBox="0 0 40 40" fill="black" stroke="none">
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

export const Diamond = props => (
  <ClippingMask>
    <circle cx="20" cy="20" r="10" />
  </ClippingMask>
);
