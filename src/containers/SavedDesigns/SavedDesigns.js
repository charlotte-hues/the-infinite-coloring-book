import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const SavedDesigns = props => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>My Designs</h1>
    </Container>
  );
};

export default SavedDesigns;
