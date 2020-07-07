import React from "react";
import Label from "../Label/Label";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.multi ? "column" : "row")};
  align-items: ${props => (props.multi ? "flex-start" : "center")};
  justify-content: space-between;
  margin: ${props => (props.multi ? "10px 0 0" : "20px 0 0")};
`;

const inputWrapper = props => {
  return (
    <StyledDiv multi={props.multi}>
      {props.label ? (
        <Label for={props.label} color={props.color} fullWidth={props.multi}>
          {props.label}
        </Label>
      ) : null}
      {props.children}
    </StyledDiv>
  );
};

export default inputWrapper;
