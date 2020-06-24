import React from "react";
import styled from "styled-components";
import ButtonWrapper from "../../ButtonWrapper/ButtonWrapper";

const SVG = styled.svg.attrs({
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
})`
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px;

  path {
    transition: all 0.2s ease;
    fill: ${props => (props.iconColor ? props.iconColor : "var(--dark)")};
  }

  &:hover {
    path {
      fill: ${props => (props.hoverColor ? props.hoverColor : "var(--orange)")};
    }
  }
`;

const CloseIcon = props => (
  <ButtonWrapper onClick={props.onClick} disabled={props.disabled}>
    <SVG
      iconColor={props.iconColor}
      hoverColor={props.hoverColor}
      disabledColor={props.disabledColor}
    >
      <path d="M6 28V34H12L31 15L25 9L6 28Z" fill="var(--dark)" />
      <path
        d="M29.2929 4.70711L27 7L33 13L35.2929 10.7071C35.6834 10.3166 35.6834 9.68342 35.2929 9.29289L30.7071 4.70711C30.3166 4.31658 29.6834 4.31658 29.2929 4.70711Z"
        fill="var(--dark)"
      />
    </SVG>
  </ButtonWrapper>
);

export default CloseIcon;
