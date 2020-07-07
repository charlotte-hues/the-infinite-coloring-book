import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  min-height: 30px;
  height: 100%;
  width: 100%;
  max-width: 280px;
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
