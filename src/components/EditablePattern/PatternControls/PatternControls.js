import React, { useState } from "react";
import PatternControlsBody from "./PatternControlsBody/PatternControlsBody";
import styled from "styled-components";

const Container = styled.div`
  background: var(--surface);
  width: 400px;
  height: 300px;
  box-shadow: var(--shadow);
  @media print {
    display: none;
  }
`;

const PatternControls = props => {
  const [active, setActive] = useState(null);
  return (
    <Container>
      <PatternControlsBody {...props} />
    </Container>
  );
};

export default PatternControls;
