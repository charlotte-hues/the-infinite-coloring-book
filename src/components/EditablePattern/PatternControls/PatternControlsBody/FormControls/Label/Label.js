import React from "react";
import styled from "styled-components";

const LabelWrapper = styled.div`
  width: 180px;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const Label = props => {
  return (
    <LabelWrapper>
      <StyledLabel htmlFor={props.for}>{props.children}</StyledLabel>
    </LabelWrapper>
  );
};

export default Label;
