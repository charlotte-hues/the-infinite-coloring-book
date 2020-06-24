import React, { useState } from "react";
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

const SuccessContainer = styled.div`
  height: 90px;
  width: 300px;
`;

const StyledErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.7rem;
`;

const Auth = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [controls, setControls] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "display name"
      },
      value: "",
      signIn: false,
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
      signIn: true,
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
      signIn: true,
      validation: {
        minLength: 6,
        required: true
      }
    }
  });
  const history = useHistory();
  const { isAuth, authRedirectPath, displayName } = props;

  // useEffect(() => {
  //   if (isAuth) {
  //     setShowModal(false);
  //   }
  // }, [isAuth]);

  const switchAuthModeHandler = e => {
    e.preventDefault();
    setIsSignUp(prevState => !prevState);
  };

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
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
      validity =
        !isSignUp && updatedControls[key].signIn === false
          ? validity
          : updatedControls[key].valid && validity;
    }
    setFormIsValid(validity);
    setControls(updatedControls);
  };

  let formElementsArray = [];
  for (let key in controls) {
    if (isSignUp || (!isSignUp && controls[key].signIn !== false)) {
      formElementsArray.push({
        id: key,
        config: controls[key]
      });
    }
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
    if (isSignUp) {
      props.createUser(
        controls.email.value,
        controls.password.value,
        controls.name.value
      );
    } else {
      props.loginUser(controls.email.value, controls.password.value);
    }
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

  const form = (
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
  );

  const successfulAuth = (
    <SuccessContainer>
      <p>
        {isSignUp
          ? `Hello ${displayName ? displayName : ""}`
          : `Welcome back ${displayName ? displayName : ""}`}
      </p>

      {isSignUp ? (
        <p>An email has been sent to your inbox to verify your email.</p>
      ) : null}
    </SuccessContainer>
  );

  return (
    <Modal
      modalClosed={closeModalHandler}
      show={showModal}
      indicate={isAuth && "smile"}
      title={
        isSignUp
          ? `Sign Up${isAuth ? " Successful" : ""}`
          : `Log in${isAuth ? " Successful" : ""}`
      }
    >
      {isAuth ? successfulAuth : form}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading,
    isAuth: state.auth.currentUser !== null,
    error: state.auth.error,
    authRedirectPath: state.redirect.authRedirectPath,
    displayName: state.auth.displayName,
    isSuccessfulSignUp: state.auth.lastLoginAt === state.auth.createdAt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password, name) =>
      dispatch(actions.createUser(email, password, name)),
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/")),
    confirmAuthError: () => dispatch(actions.clearAuthError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
