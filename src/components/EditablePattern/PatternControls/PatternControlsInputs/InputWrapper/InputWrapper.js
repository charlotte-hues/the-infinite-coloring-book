import React from "react";
import Label from "../Inputs/Label/Label";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.multi ? "flex-start" : "center")};
  justify-content: space-between;
  margin: 20px 0 0;
`;

const inputWrapper = props => {
  return (
    <StyledDiv multi={props.multi}>
      {props.label ? <Label for={props.label}>{props.label}</Label> : null}
      {props.children}
    </StyledDiv>
  );
};

export default inputWrapper;
