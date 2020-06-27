import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  cursor: pointer;
  color: ${props => props.color && props.color};
`;

const Span = props => {
  return (
    <StyledSpan color={props.color || "var(--orange)"} onClick={props.onClick}>
      {props.children}
    </StyledSpan>
  );
};

export default Span;
