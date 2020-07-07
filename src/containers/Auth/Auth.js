import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import Input from "../../components/UI/Input/Input";
import Modal from "../../components/UI/Modal/Modal";
import { WrappedButton } from "../../components/UI/Button/Button";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import SwitchAuth from "../../components/Auth/SwitchAuth";
import Success from "../../components/Auth/Success";
import ErrorMessage from "../../components/Auth/errorMessage";

const FormContainer = styled.form`
  height: ${props => (props.isSignUp ? "300px" : "270px")};
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

const Auth = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [controls, setControls] = useState({
    name: {
      elementType: "input",
      label: "display name",
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
      label: "email address",
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
      label: "password",
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

  const switchAuthModeHandler = e => {
    e.preventDefault();
    setIsSignUp(prevState => !prevState);
    props.confirmNotice();
  };

  const forgotPasswordHandler = () => {
    setForgotPassword(prevState => {
      return !prevState;
    });
    props.confirmNotice();
  };

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    if (props.error) props.confirmNotice();
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
      props.confirmNotice();
    } else {
      if (isAuth) {
        history.push(authRedirectPath);
      } else history.goBack();
    }
  };

  const backToLoginHandler = () => {
    forgotPasswordHandler();
    props.confirmNotice();
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
        label={input.config.label}
        labelColor="var(--dark)"
        name={input.config.elementConfig.type}
        type={input.config.elementConfig.type}
        placeholder={input.config.elementConfig.placeholder}
        value={input.config.value}
        onChange={e => inputChangedHandler(e, input.id)}
        isValid={checkValidity(input.config.value, input.config.validation)}
        shouldValidate={input.config.validation.required}
        touched={input.config.changed}
      />
    );
  });

  const form = (
    <FormContainer onSubmit={submitHandler} isSignUp={isSignUp}>
      {inputs}
      <ErrorMessage>{props.error}</ErrorMessage>
      <WrappedButton disabled={!formIsValid}>
        {isSignUp ? "Sign Up" : "Log In"}
      </WrappedButton>
      <SwitchAuth
        isSignUp={isSignUp}
        onForgotPassword={forgotPasswordHandler}
        onClickSwitch={switchAuthModeHandler}
      />
    </FormContainer>
  );
  return (
    <Modal
      modalClosed={closeModalHandler}
      show={showModal}
      indicate={(isAuth || props.passwordReset) && "smile"}
      title={
        forgotPassword
          ? "Forgot Password"
          : isSignUp
          ? `Sign Up${isAuth ? " Successful" : ""}`
          : `Log in${isAuth ? " Successful" : ""}`
      }
    >
      {isAuth || props.passwordReset ? (
        <Success
          displayName={displayName}
          isSignUp={isSignUp}
          resetPassword={props.passwordReset}
          backToLogin={backToLoginHandler}
        />
      ) : forgotPassword ? (
        <ForgotPassword
          email={controls.email.value}
          error={props.error}
          clearError={props.confirmNotice}
          rememberedPassword={forgotPasswordHandler}
          sendPasswordReset={props.sendPasswordReset}
        />
      ) : (
        form
      )}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading,
    isAuth: state.auth.currentUser !== null,
    passwordReset: state.auth.passwordReset,
    error: state.auth.error,
    authRedirectPath: state.redirect.authRedirectPath,
    displayName: state.auth.currentUser && state.auth.currentUser.displayName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: (email, password, name) =>
      dispatch(actions.createUser(email, password, name)),
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/")),
    confirmNotice: () => dispatch(actions.clearAuthNotice()),
    sendPasswordReset: email => dispatch(actions.sendPasswordReset(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
