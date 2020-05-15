import React from "react";
import styled from "styled-components";

const LabelWrapper = styled.div`
  width: 140px;
`;

const StyledLabel = styled.label`
  width: 100%;
  font-size: 0.85rem;
`;

const Label = props => {
  return (
    <LabelWrapper>
      <StyledLabel htmlFor={props.for}>{props.children}</StyledLabel>
    </LabelWrapper>
  );
};

export default Label;
