import React from "react";
import styled from "styled-components";
// import Tiles from "../../Tiles/Tiles";

const Container = styled.div`
  width: 80px;
  height: 80px;
  background: var(--surface);
  border: 2px solid var(--trim);
  border-radius: 4px;
`;

const Thumnail = props => {
  return <Container>thumb</Container>;
};

export default Thumnail;
