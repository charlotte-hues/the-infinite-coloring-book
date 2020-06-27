import React from "react";
import styled, { css } from "styled-components";
import InputWrapper from "../InputWrapper/InputWrapper";

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
  display: inline-block;
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
    <InputWrapper label={props.label} color={props.labelColor} multi>
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
    </InputWrapper>
  );
};

Input.defaultProps = {
  shouldValidate: false,
  touched: false,
  isValid: false
};

export default Input;
