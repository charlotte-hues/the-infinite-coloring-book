import React, { useContext } from "react";
import { PatternContext } from "../../../context/PatternContext";
import EditablePattern from "../EditablePattern";
import styled from "styled-components";

const PrintPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 18px;
  justify-items: center;
  width: ${props => (props.orientation === "landscape" ? "610px" : "440px")};
  height: ${props =>
    props.orientation === "portrait"
      ? "610px"
      : props.orientation === "landscape"
      ? "490px"
      : "440px"};
  box-shadow: var(--shadow);
  background: var(--surface);

  //   @media only screen and (max-width: 600px) {
  //     width: 85%;
  //     height: auto;
  //   }
  //   @media only screen and (min-width: 600px) {
  //     width: 80%;
  //     height: auto;
  //   }
  //   @media only screen and (min-width: 768px) {
  //     height: 100%;
  //     width: auto;
  //   }
  //   @media only screen and (min-width: 992px) {
  //     height: 100%;
  //     width: 100%;
  //   }
  //   @media only screen and (min-width: 1200px) {
  //     height: 100%;
  //     width: auto;
  //   }
  //   @media screen and (max-device-width: 480px) {
  //     width: 90%;
  //     height: auto;
  //   }

  @media print {
    width: 90%;
    margin: 0;
    padding: 0;
    background: #fff;
    box-shadow: none;
    top: 0;

    @page {
      margin: 1cm;
      size: ${props =>
        props.orientation === "landscape" ? "landscape" : "portrait"};
    }
  }
`;

const PrintPreview = props => {
  const { orientation } = useContext(PatternContext);

  return (
    <PrintPreviewContainer
      backgroundColor={props.backgroundColor}
      orientation={orientation}
    >
      <EditablePattern />
    </PrintPreviewContainer>
  );
};

export default PrintPreview;
