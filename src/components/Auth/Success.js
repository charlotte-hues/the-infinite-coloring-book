import React from "react";
import styled from "styled-components";
import Span from "../UI/Span/Span";

const SuccessContainer = styled.div`
  height: 90px;
  width: 300px;
`;

const successfulAuth = ({
  displayName,
  isSignUp,
  resetPassword,
  backToLogin
}) => {
  const logIn = <p>Welcome back {displayName ? displayName : ""}</p>;

  const signUp = (
    <React.Fragment>
      <p>Hello {displayName ? displayName : ""}</p>
      <p>An email has been sent to your inbox to verify your email.</p>
    </React.Fragment>
  );

  const sentPassword = (
    <p>
      Check your email inbox for an email to reset your password.
      <br />
      <br />
      <Span onClick={backToLogin}>Back to Log in</Span>
    </p>
  );

  return (
    <SuccessContainer>
      {resetPassword ? sentPassword : isSignUp ? signUp : logIn}
    </SuccessContainer>
  );
};

export default successfulAuth;
