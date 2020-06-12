import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const FormContainer = styled.form`
  height: 200px;
  width: 300px;
  padding: 30px 20px;
  background: var(--surface);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Auth = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "email address"
      },
      value: "",
      validation: {
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

  const [isSignUp, setIsSignUp] = useState(true);

  const switchAuthModeHandler = () => {
    setIsSignUp(prevState => !prevState);
  };

  const submitHandler = e => {
    e.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSignUp);
  };

  const inputChangedHandler = (e, input) => {
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controls[input].validation)
      })
    });
    let validity = true;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
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
      ></Input>
    );
  });

  let loginArea = (
    <FormContainer onSubmit={submitHandler}>
      {inputs}
      <div>
        <Button disabled={!formIsValid}>
          {isSignUp ? "Sign Up" : "Log In"}
        </Button>
        <Button onClick={switchAuthModeHandler}>
          Switch to {isSignUp ? "Log in" : "Sign Up"}
        </Button>
      </div>
    </FormContainer>
  );

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4>Login page and sign up page</h4>
      {loginArea}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading,
    isAuth: state.auth.token !== null,
    error: state.auth.error,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirect("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
