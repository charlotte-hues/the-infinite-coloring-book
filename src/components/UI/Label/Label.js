import React from "react";
import styled from "styled-components";

const LabelWrapper = styled.div`
  width: ${props => (props.fullWidth ? "100%" : "140px")};
`;

const StyledLabel = styled.label`
  width: 100%;
  font-size: 0.85rem;
  color: ${props => props.color && props.color};
  transition: all 0.3s ease;
`;

const Label = props => {
  return (
    <LabelWrapper fullWidth={props.fullWidth}>
      <StyledLabel htmlFor={props.for} color={props.color || "var(--black)"}>
        {props.children}
      </StyledLabel>
    </LabelWrapper>
  );
};

export default Label;
