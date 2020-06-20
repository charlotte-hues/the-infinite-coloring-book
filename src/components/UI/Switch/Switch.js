import React from "react";
import styled from "styled-components";
import sharedSvgStyles from "../Icons/ControlIcons/sharedSvgStyles/sharedSvgStyles";
import InputWrapper from "../InputWrapper/InputWrapper";
import IconButton from "../Button/IconButton";

const SwitchSvg = styled.svg`
  ${sharedSvgStyles}
  width: 41px;
  height: 22px;
  max-width: 41px;
  max-height: 22px;
`;

const SwitchNode = styled.circle`
  transition: all 0.2s ease;
`;

export const ActiveSwitch = props => {
  return (
    <React.Fragment>
      {props.children}
      <rect
        x="1.5"
        y="1.5"
        width="38"
        height="19"
        rx="9.5"
        stroke="var(--orange)"
        fill={props.active ? "none" : props.background}
      />
      <SwitchNode
        cx={props.active ? "30.5" : "11"}
        cy={props.active ? "11" : "11"}
        r="9.5"
        fill="var(--surface)"
        stroke="var(--orange)"
      />
    </React.Fragment>
  );
};

export const PatternActiveSwitch = ({
  active,
  onClick,
  disabled,
  background
}) => {
  return (
    <InputWrapper>
      <IconButton onClick={onClick} disabled={disabled}>
        <SwitchSvg>
          <ActiveSwitch active={active} background={background}>
            <path
              d="M21 16L17 20M25 2L7.5 19.5M15 2L2.5 14.5"
              stroke={active ? "var(--orange)" : "none"}
              strokeLinecap="square"
            />
          </ActiveSwitch>
        </SwitchSvg>
      </IconButton>
    </InputWrapper>
  );
};

export const OnOffSwitch = ({ active, onClick, disabled }) => (
  <InputWrapper>
    <IconButton onClick={onClick} disabled={disabled}>
      <SwitchSvg>
        <ActiveSwitch active={active} background={"none"}>
          <path
            d="M32.6338 13.7281C32.8363 13.9363 32.9375 14.1838 32.9375 14.4763C32.9375 14.7688 32.8363 15.0163 32.6338 15.2244C32.4369 15.41 32.195 15.5 31.9138 15.5C31.6325 15.5 31.3962 15.41 31.1937 15.2244L28.9831 12.5806L26.7725 15.2244C26.57 15.41 26.3281 15.5 26.0525 15.5C25.7769 15.5 25.535 15.41 25.3325 15.2244C25.1525 15.0163 25.0625 14.7631 25.0625 14.4763C25.0625 14.1894 25.1525 13.9363 25.3325 13.7281L27.6444 11.0169L25.3325 8.27188C25.1525 8.06375 25.0625 7.81625 25.0625 7.52375C25.0625 7.23125 25.1525 6.98375 25.3325 6.77563C25.5294 6.59 25.7712 6.5 26.0525 6.5C26.3337 6.5 26.57 6.59 26.7725 6.77563L28.9831 9.41938L31.1937 6.77563C31.3962 6.59 31.6381 6.5 31.9138 6.5C32.1894 6.5 32.4313 6.59 32.6338 6.77563C32.8363 6.98375 32.9375 7.23688 32.9375 7.52375C32.9375 7.81063 32.8363 8.06375 32.6338 8.27188L30.3219 11.0169L32.6338 13.7281Z"
            fill="#C74F33"
          />
          <path
            d="M16.9162 7.46749L11.6006 15.5675C11.3925 15.8769 11.2406 16.0625 10.875 16.0625H10.7175C10.3743 16.0625 10.0875 15.9275 9.86808 15.6575L7.13433 12.2431C6.9712 12.0125 6.90933 11.7594 6.95433 11.4894C6.98808 11.2194 7.12308 11 7.34245 10.8256C7.56183 10.6512 7.8262 10.5837 8.1187 10.6231C8.4112 10.6625 8.65308 10.7975 8.83308 11.0281L10.6275 13.2556L15.1218 6.39874C15.285 6.16811 15.5043 6.02186 15.7743 5.96561C16.05 5.90936 16.3143 5.94874 16.5787 6.08374C16.8206 6.23561 16.9725 6.44374 17.0343 6.70811C17.0962 6.96124 17.0568 7.21999 16.9162 7.46749Z"
            fill="#C74F33"
          />
        </ActiveSwitch>
      </SwitchSvg>
    </IconButton>
  </InputWrapper>
);

export default OnOffSwitch;
