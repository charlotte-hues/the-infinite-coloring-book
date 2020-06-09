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

const deleteIcon = props => (
  <ButtonWrapper onClick={props.onClick} disabled={props.disabled}>
    <SVG>
      <path
        d="M4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9V7ZM36 9C36.5523 9 37 8.55228 37 8C37 7.44772 36.5523 7 36 7V9ZM8 37L7.00059 37.0345C7.01916 37.573 7.46113 38 8 38V37ZM32 37V38C32.5389 38 32.9808 37.573 32.9994 37.0345L32 37ZM16 3V2C15.6487 2 15.3232 2.1843 15.1425 2.4855L16 3ZM24 3L24.8575 2.4855C24.6768 2.1843 24.3513 2 24 2V3ZM4 9H7V7H4V9ZM6.00059 8.03446L7.00059 37.0345L8.99941 36.9655L7.99941 7.96554L6.00059 8.03446ZM8 38H32V36H8V38ZM33 9H36V7H33V9ZM32.9994 37.0345L33.9994 8.03446L32.0006 7.96554L31.0006 36.9655L32.9994 37.0345ZM7 9H13V7H7V9ZM13.8575 8.5145L16.8575 3.5145L15.1425 2.4855L12.1425 7.4855L13.8575 8.5145ZM16 4H24V2H16V4ZM13 9H27V7H13V9ZM27 9H33V7H27V9ZM23.1425 3.5145L26.1425 8.5145L27.8575 7.4855L24.8575 2.4855L23.1425 3.5145Z"
        stroke={props.iconColor ? props.iconColor : "var(--dark)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 13.75V31.75M14 13.75L15 31.75M26 13.75L25 31.75"
        stroke={props.iconColor ? props.iconColor : "var(--dark)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SVG>
  </ButtonWrapper>
);

export default deleteIcon;
