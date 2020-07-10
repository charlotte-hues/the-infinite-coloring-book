import React from "react";
import styled from "styled-components";
import Span from "../../../../UI/Span/Span";
import { WrappedButton } from "../../../../UI/Button/Button";

const Container = styled.div`
  width: 280px;
`;

const SaveSuccess = props => {
  return (
    <Container>
      <p>
        You can view and edit your patterns in the{" "}
        <Span onClick={props.viewDesigns}>my designs tab</Span>
      </p>
      <WrappedButton onClick={props.closeModal}>Contine Creating</WrappedButton>
    </Container>
  );
};

export default SaveSuccess;
