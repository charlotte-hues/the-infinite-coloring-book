import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const Auth = props => {
  useEffect(() => {
    return () => {
      props.onSetRedirectPath("/");
    };
  }, []);

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

  const [formIsValid, setFormIsValid] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const submitHandler = e => {
    e.preventDefault();
    props.onAuth(controls.email.value, controls.password.value, isSignUp);
  };

  const inputChangedHandler = (e, input) => {
    // const updatedControls = updateObject(controls, {
    //   [input]: updateObject(controls[input], {
    //     value: e.target.value,
    //     valid: checkValidity(e.target.value, controls[input].validation),
    //     changed: true
    //   })
    // });

    let formIsValid = true;
    // for (let key in updatedControls) {
    //   formIsValid = updatedControls[key].valid && formIsValid;
    // }

    // setControls(updatedControls);
    setFormIsValid(formIsValid);
  };

  const switchAuthModeHandler = () => {
    setIsSignUp(prevState => !prevState);
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
      <input
        key={input.id}
        elementConfig={input.config.elementConfig}
        elementType={input.config.elementType}
        value={input.config.value}
        changed={e => inputChangedHandler(e, input.id)}
        valid={input.config.valid}
        shouldValidate={input.config.validation}
        touched={input.config.changed}
      />
    );
  });

  let loginArea = (
    <form onSubmit={submitHandler}>
      {inputs}
      <div>
        <button submit={true} disabled={!formIsValid} btnType="Success">
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
        <button clicked={switchAuthModeHandler} btnType="Danger">
          Switch to {isSignUp ? "Log in" : "Sign Up"}
        </button>
      </div>
    </form>
  );

  // if (props.isLoading) {
  //   loginArea = <Spinner />;
  // }

  if (props.isAuth && !props.isBuilding) {
    if (isSignUp) {
      loginArea = <h1>Welcome! Create an account</h1>;
    } else {
      loginArea = <h1>Welcome Back!</h1>;
    }
  }

  // if (props.isAuth && props.isBuilding) {
  //   loginArea = <Redirect to={props.authRedirectPath} />;
  // }

  const errorMessage = props.error ? <p>{props.error.message}</p> : null;

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4>Login page and sign up page</h4>
      {/* {loginArea} */}
    </Container>
  );
};

export default Auth;
