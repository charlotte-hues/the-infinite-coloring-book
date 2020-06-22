import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import Input from "../../components/UI/Input/Input";
import Modal from "../../components/UI/Modal/Modal";
import { WrappedButton } from "../../components/UI/Button/Button";

const FormContainer = styled.form`
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
`;

const StyledErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.7rem;
`;

const Auth = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [controls, setControls] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "display name"
      },
      value: "",
      validation: {
        minLength: 0,
        required: true
      }
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "email address"
      },
      value: "",
      validation: {
        includes: ["@", "."],
        required: true
      }
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "******"
      },
      value: "",
      validation: {
        minLength: 6,
        required: true
      }
    }
  });

  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(true);
  const { isAuth, authRedirectPath } = props;
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (isAuth) {
      setShowModal(false);
    }
  }, [isAuth]);

  const switchAuthModeHandler = e => {
    e.preventDefault();
    setIsSignUp(prevState => !prevState);
  };

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    console.log(input);
    if (props.error) props.confirmAuthError();
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
    console.log(validity);
    setFormIsValid(validity);
    setControls(updatedControls);
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

  const submitHandler = e => {
    e.preventDefault();
    props.onAuth(
      controls.email.value,
      controls.password.value,
      isSignUp,
      controls.name.value
    );
  };

  const closeModalHandler = (mounted = true) => {
    if (mounted) {
      setShowModal(false);
    } else {
      if (isAuth) {
        history.push(authRedirectPath);
      } else history.goBack();
    }
  };

  const errorMessage = props.error ? (
    <StyledErrorMessage>{props.error}</StyledErrorMessage>
  ) : null;

  return (
    <Modal
      modalClosed={closeModalHandler}
      show={showModal}
      title={isSignUp ? "Sign Up" : "Log in"}
    >
      <FormContainer onSubmit={submitHandler}>
        {inputs}
        {errorMessage}
        <div>
          <WrappedButton disabled={!formIsValid}>
            {isSignUp ? "Sign Up" : "Log In"}
          </WrappedButton>
          <WrappedButton onClick={switchAuthModeHandler}>
            Switch to {isSignUp ? "Log in" : "Sign Up"}
          </WrappedButton>
        </div>
      </FormContainer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading,
    isAuth: state.auth.currentUser !== null,
    error: state.auth.error,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/")),
    confirmAuthError: () => dispatch(actions.clearAuthError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
