import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  height: 30px;
  width: 100%;
`;

const StyledErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.7rem;
`;

const errorMessage = ({ children }) => (
  <ErrorContainer>
    <StyledErrorMessage>{children}</StyledErrorMessage>
  </ErrorContainer>
);

export default errorMessage;
