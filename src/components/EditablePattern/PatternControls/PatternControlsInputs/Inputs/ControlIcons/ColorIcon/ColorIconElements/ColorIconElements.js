import React from "react";
import styled from "styled-components";

const ColorIcon = props => (
  <React.Fragment>
    <rect x="3" y="3" width="26" height="26" rx="1" fill={props.background} />
    <path
      d="M5.84601 11.7074L11.7074 5.84601C12.8469 5.36473 14.0845 5.06997 15.3818 5L5 15.3818C5.06997 14.0845 5.36473 12.8469 5.84601 11.7074Z M6.08828 20.7935C5.76903 20.1379 5.51301 19.4459 5.32816 18.7252L18.7252 5.32816C19.4459 5.51301 20.1379 5.76903 20.7935 6.08828L6.08828 20.7935Z M8.94475 24.4371C8.43171 24.0094 7.95821 23.5359 7.53054 23.0229L23.0229 7.53054C23.5359 7.95821 24.0094 8.43171 24.4371 8.94475L8.94475 24.4371Z M13.2424 26.6395C12.5218 26.4546 11.8297 26.1986 11.1741 25.8793L25.8793 11.1741C26.1986 11.8297 26.4546 12.5218 26.6395 13.2424L13.2424 26.6395Z M20.2602 26.1216C19.1207 26.6029 17.8831 26.8976 16.5858 26.9676L26.9676 16.5858C26.8976 17.8831 26.6029 19.1207 26.1216 20.2602L20.2602 26.1216Z"
      fill={props.pattern}
    />
    <rect
      x="0.5"
      y="0.5"
      width="31"
      height="31"
      rx="1.5"
      stroke={props.active ? "var(--orange)" : "var(--trim)"}
    />
  </React.Fragment>
);

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

export default ColorIcon;
