import React from "react";

const ColorIcon = props => {
  return (
    <React.Fragment>
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="1"
        stroke={props.active ? "var(--black)" : "var(--trim)"}
      />
      <rect x="4" y="4" width="24" height="24" fill={props.fill} />
    </React.Fragment>
  );
};

export default ColorIcon;
