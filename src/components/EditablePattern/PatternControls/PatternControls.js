import React, { useState } from "react";
import PatternControlsBody from "./PatternControlsBody/PatternControlsBody";
import styled from "styled-components";

const Container = styled.div`
  background: var(--surface);
  height: 300px;
  padding: 6px;
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
