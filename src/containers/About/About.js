import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  height: 100%;
  width: 80vw;
  margin: auto;
`;

const About = props => {
  console.log("ABOUT");
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Hi, I hope you enjoy using the infinite coloring book!</h3>
    </Container>
  );
};

export default About;
