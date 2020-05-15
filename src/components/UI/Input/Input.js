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
  ${sharedStyles}
`;

const Input = props => {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </StyledInput>
  );
};

export default Input;
