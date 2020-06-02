import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: flex;
  height: 100%;
  width: 80vw;
  margin: auto;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    align-content: center;
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 780px) {
    justify-content: start;
    align-items: center;
  }

  @media print {
    height: auto;
    width: 100%;
  }
`;

const About = props => {
  console.log("ABOUT");
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Hi, thanks for using the infinite coloring book</h1>
    </Container>
  );
};

export default About;
