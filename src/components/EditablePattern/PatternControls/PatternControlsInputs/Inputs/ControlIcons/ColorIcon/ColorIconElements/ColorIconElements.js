import React from "react";
import styled from "styled-components";

const SwitchNode = styled.circle`
  transition: all 0.2s ease;
`;

export const ActiveSwitch = props => {
  console.log(props.active);
  return (
    <React.Fragment>
      <path
        d="M21 16L17 20M25 2L7.5 19.5M15 2L2.5 14.5"
        stroke="var(--orange)"
        strokeLinecap="square"
      />
      <rect
        x="1.5"
        y="1.5"
        width="38"
        height="19"
        rx="9.5"
        stroke="var(--orange)"
        fill={props.active === "pattern" ? "none" : props.background}
      />
      <SwitchNode
        cx={props.active === "pattern" ? "30.5" : "11"}
        cy={props.active === "pattern" ? "11" : "11"}
        r="9.5"
        fill="var(--surface)"
        stroke="var(--orange)"
      />
    </React.Fragment>
  );
};

export const AddCustomColorIcon = props => (
  <React.Fragment>
    <path
      d="M8 16L24 16 M16 24L16 8"
      stroke="var(--trim)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      rx="1.5"
      stroke="var(--trim)"
    />
  </React.Fragment>
);
