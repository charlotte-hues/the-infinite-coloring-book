import React from "react";
import PatternContextProvider from "../../context/PatternContext";
import PrintPreview from "../../components/EditablePattern/PrintPreview/PrintPreview";
import styled from "styled-components";
import PatternControls from "../../components/EditablePattern/PatternControls/PatternControls";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 80vw;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-content: center;
    width: 100%;
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
    <PatternContextProvider>
      <Container>
        <PreviewArea>
          <PrintPreview />
        </PreviewArea>

        <PatternControls />
      </Container>
    </PatternContextProvider>
  );
};

export default EditPattern;
