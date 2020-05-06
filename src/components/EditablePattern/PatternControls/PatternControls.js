import React from "react";
import PatternControlsBody from "./PatternControlsBody/PatternControlsBody";
import styled from "styled-components";

const Container = styled.div`
  background: var(--surface);
  width: 400px;
  height: 300px;
  box-shadow: var(--shadow);
  margin: 10px;
  @media print {
    display: none;
  }
`;

const PatternControls = props => {
  return (
    <Container>
      <PatternControlsBody />
    </Container>
  );
};

export default PatternControls;
