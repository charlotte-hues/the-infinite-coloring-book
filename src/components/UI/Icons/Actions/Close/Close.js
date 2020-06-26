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
    stroke: ${props => (props.iconColor ? props.iconColor : "var(--dark)")};
  }

  &:hover {
    path {
      stroke: ${props =>
        props.hoverColor ? props.hoverColor : "var(--orange)"};
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
      <path
        d="M12 10L28 30 M28 10L12 30"
        stroke="var(--dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </SVG>
  </ButtonWrapper>
);

export default CloseIcon;
