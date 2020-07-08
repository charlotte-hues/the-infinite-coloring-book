import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PrintPreview from "./PrintPreview/PrintPreview";
import PatternControls from "./EditPatternToolbar/EditPatternToolbar";

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

const PreviewArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  @media only screen and (max-width: 1200px) {
    width: auto;
    height: auto;
  }
  @media print {
    width: 100%;
    padding: 0 7%;
  }
`;

const EditPattern = props => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PreviewArea>
        <PrintPreview />
      </PreviewArea>

      <PatternControls />
    </Container>
  );
};

export default EditPattern;
