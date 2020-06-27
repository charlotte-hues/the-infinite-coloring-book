import React from "react";
import styled from "styled-components";
import Span from "../../components/UI/Span/Span";

const StyledParagraph = styled.p`
  margin: 20px 0 0;
  color: var(--dark);
  font-size: 0.85rem;
`;

const switchAuth = ({ onForgotPassword, onClickSwitch, isSignUp }) => {
  let content = (
    <React.Fragment>
      <StyledParagraph>
        <Span onClick={onForgotPassword} color="var(--dark)">
          Forgot password?
        </Span>
      </StyledParagraph>
      <StyledParagraph>
        Not got an Account? <Span onClick={onClickSwitch}>Sign up here</Span>
      </StyledParagraph>
    </React.Fragment>
  );

  if (isSignUp) {
    content = (
      <StyledParagraph>
        Already have an Account?{" "}
        <Span onClick={onClickSwitch}>Log in here</Span>
      </StyledParagraph>
    );
  }

  return content;
};

export default switchAuth;
