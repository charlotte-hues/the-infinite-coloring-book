import React from "react";

const ClippingMask = props => {
  return (
    <React.Fragment>
      <mask id={props.mask} viewBox="1 1 39 39" fill="black" stroke="none">
        <rect width="100%" height="100%" fill="white" stroke="white" />
        {props.children}
      </mask>
      {props.children}
    </React.Fragment>
  );
};

export const Circle = props => (
  <ClippingMask mask={props.mask}>
    <circle cx="20" cy="20" r="10" />
  </ClippingMask>
);

export const Diamond = props => (
  <ClippingMask mask={props.mask}>
    <path d="M20 6L6 20L20 34L34 20L20 6Z" />
  </ClippingMask>
);

// export const Letter = props => (
//   <ClippingMask>
//     <text
//       style={{
//         x: "40px",
//         y: "800px",
//         textAnchor: "middle",
//         fontWeight: "900",
//         fontSize: "2.5em",
//         transform: "translate(50%, 85%)"
//       }}
//     >
//       {props.children}
//     </text>
//   </ClippingMask>
// );
