import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  height: 100%;
  width: 80vw;
  margin: auto;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h3 {
    margin: auto;
  }
`;

const About = props => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BodyContainer>
        <h3>Hi, I hope you enjoy using the infinite coloring book!</h3>
      </BodyContainer>
    </Container>
  );
};

export default About;
