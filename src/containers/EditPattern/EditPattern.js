import React, { useEffect, useState, useContext } from "react";
import PatternContextProvider from "../../context/PatternContext";
import { allPatterns } from "../../components/Tiles/Tiles";
import PrintPreview from "../../components/EditablePattern/PrintPreview/PrintPreview";
import styled from "styled-components";
import PatternControls from "../../components/EditablePattern/PatternControls/PatternControls";
import getRandNum from "../../utility/getRandNum";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 80vw;
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

const initialMaxNo = [];
for (const _ in allPatterns) {
  initialMaxNo.push(_);
}

const maxNo = initialMaxNo.length;

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
