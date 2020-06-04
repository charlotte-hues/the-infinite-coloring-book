import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const Auth = props => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4>Login page and sign up page</h4>
    </Container>
  );
};

export default Auth;
