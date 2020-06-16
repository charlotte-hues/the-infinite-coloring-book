import React from "react";
import styled, { css } from "styled-components";

const sharedStyles = css`
  background-color: var(--background);
  height: 28px;
  border-radius: 5px;
  border: 2px solid var(--trim);
  padding: 2px 6px;
  box-sizing: border-box;
  color: var(--black);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles};

  &.ShouldValidate {
    border-color: var(--error);

    &.Valid {
      border-color: var(--trim);
      color: var(--orange);
      font-weight: 600;
    }
  }
`;

const Input = props => {
  const classes = [];
  if (props.shouldValidate && props.touched) {
    classes.push("ShouldValidate");
    if (props.isValid) classes.push("Valid");
  }

  return (
    <StyledInput
      className={classes.join(" ")}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      maxLength={props.maxlength}
    >
      {props.children}
    </StyledInput>
  );
};

Input.defaultProps = {
  shouldValidate: false,
  touched: false,
  isValid: false
};

export default Input;
