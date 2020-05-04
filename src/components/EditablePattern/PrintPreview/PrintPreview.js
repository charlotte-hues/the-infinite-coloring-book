import React from "react";
import EditablePattern from "../EditablePattern";
import styled from "styled-components";

const PrintPreviewContainer = styled.div`
  padding: 18px;
  width: ${props => (props.orientation === "landscape" ? "610px" : "440px")};
  height: ${props => (props.orientation === "portrait" ? "auto" : "auto")};

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};

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
  let orientation = "portrait";
  if (props.orientation[0] > props.orientation[1]) {
    orientation = "landscape";
  }
  if (props.orientation[0] === props.orientation[1]) {
    orientation = "square";
  }
  return (
    <PrintPreviewContainer
      backgroundColor={props.backgroundColor}
      orientation={props.orientation}
    >
      <EditablePattern
        columns={props.columns}
        patternColor={props.patternColor}
        label={props.label}
        patterns={props.patterns}
        switchTile={props.switchTile}
      />
    </PrintPreviewContainer>
  );
};

export default PrintPreview;
