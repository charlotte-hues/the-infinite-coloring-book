import React, { useState } from "react";
import styled from "styled-components";
import PatternControlsHeader from "./PatternControlsHeader/PatternControlsHeader";
import PatternControlsBody from "./PatternControlsBody/PatternControlsBody";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 345px;
  height: 220px;
  padding: 6px 25px 10px;
  background: var(--surface);
  box-shadow: var(--shadow);
  margin: 10px;
  @media print {
    display: none;
  }
`;

const PatternControls = props => {
  const [active, setActive] = useState("new");

  const switchControlBodyHandler = group => {
    setActive(group);
  };

  return (
    <Container>
      <PatternControlsHeader
        active={active}
        onClick={switchControlBodyHandler}
      />
      <PatternControlsBody active={active} />
    </Container>
  );
};

export default PatternControls;
