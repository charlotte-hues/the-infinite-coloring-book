import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { updateObject, checkValidity } from "../../../shared/utility";
import Input from "../../../components/UI/Input/Input";
import ErrorMessage from "../../../components/Auth/errorMessage";
import { WrappedButton } from "../../../components/UI/Button/Button";

const FormContainer = styled.form`
  height: ${props => (props.isSignUp ? "300px" : "270px")};
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

const StyledParagraph = styled.p`
  margin: 20px 0 0;
  color: ${props => (props.color ? props.color : "var(--dark)")};
  font-size: 0.85rem;
  cursor: pointer;
`;

const ForgotPassword = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      label: "email address",
      elementConfig: {
        type: "email",
        placeholder: "email address"
      },
      value: props.email,
      signIn: true,
      validation: {
        includes: ["@", "."],
        required: true
      }
    }
  });

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    if (props.error) props.clearError();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controls[input].validation),
        changed: true
      })
    });
    let validity = true;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
    setFormIsValid(validity);
    setControls(updatedControls);
  };

  useEffect(() => {
    const validity = checkValidity(props.email, controls.email.validation);
    setFormIsValid(validity);
  }, [controls.email.validation, props.email]);

  const submitHandler = e => {
    e.preventDefault();
    props.sendPasswordReset(controls.email.value);
  };

  let formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }

  let inputs = formElementsArray.map(input => {
    return (
      <Input
        label={input.config.label}
        labelColor="var(--dark)"
        key={input.id}
        name={input.config.elementConfig.type}
        type={input.config.elementConfig.type}
        placeholder={input.config.elementConfig.placeholder}
        value={input.config.value}
        onChange={e => inputChangedHandler(e, input.id)}
        isValid={checkValidity(input.config.value, input.config.validation)}
        shouldValidate={input.config.validation.required}
        touched={input.config.changed}
      ></Input>
    );
  });

  const form = (
    <FormContainer onSubmit={submitHandler}>
      <StyledParagraph color="var(--black)">
        Enter your email and we will send you a new password.
      </StyledParagraph>
      {inputs}
      <ErrorMessage>{props.error}</ErrorMessage>
      <div>
        <WrappedButton disabled={!formIsValid} onClick={submitHandler}>
          Send me a new password
        </WrappedButton>
        <StyledParagraph onClick={props.rememberedPassword} color="var(--dark)">
          I've remembered my password!
        </StyledParagraph>
      </div>
    </FormContainer>
  );

  return form;
};

export default ForgotPassword;
