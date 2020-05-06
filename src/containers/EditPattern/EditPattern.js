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
  justify-content: space-around;
  align-items: center;
  @media print {
    height: auto;
  }
`;

const PreviewArea = styled.div`
  display: flex;
  justify-content: center;
  width: 650px;
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
