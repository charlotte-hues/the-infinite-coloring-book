import React, { useContext } from "react";
import { StateContext } from "../../../context/PatternContext/PatternContext";
import EditablePattern from "../EditablePattern";
import styled from "styled-components";

const PrintPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 18px;
  justify-items: center;
  margin: 10px;
  width: ${props => (props.orientation === "landscape" ? "660px" : "490px")};
  height: ${props =>
    props.orientation === "portrait"
      ? "660px"
      : props.orientation === "landscape"
      ? "500px"
      : "490px"};
  box-shadow: var(--shadow);
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "var(--surface)"};
  transition: all 0.5s ease;

  @media only screen and (max-width: 1200px) {
    width: ${props => (props.orientation === "landscape" ? "580px" : "370px")};
    height: ${props =>
      props.orientation === "portrait"
        ? "480px"
        : props.orientation === "landscape"
        ? "450px"
        : "370px"};
  }

  @media only screen and (max-width: 780px) {
    padding: 10px;
    width: ${props =>
      props.orientation === "landscape"
        ? "calc(100vw - 30px)"
        : "calc(100vw - 30px)"};
    height: ${props =>
      props.orientation === "portrait"
        ? "calc((100vw - 30px) * 1.4)"
        : props.orientation === "landscape"
        ? "calc((100vw - 30px) * 0.8)"
        : "calc(100vw - 30px)"};
    max-width: ${props =>
      props.orientation === "landscape" ? "610px" : "340px"};
    max-height: ${props =>
      props.orientation === "portrait"
        ? "458px"
        : props.orientation === "landscape"
        ? "480px"
        : "340px"};
  }

  /* Ipad Portrait */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
    width: ${props => (props.orientation === "landscape" ? "90vw" : "70vw")};
    height: ${props =>
      props.orientation === "portrait"
        ? "calc(70vw * 1.4)"
        : props.orientation === "landscape"
        ? "calc(90vw * 0.8)"
        : "70vw"};
  }

  @media print {
    display: block;
    width: 100%;
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
  const { orientation, backgroundColor } = useContext(StateContext);

  console.log("rendered");

  return (
    <PrintPreviewContainer
      backgroundColor={backgroundColor}
      orientation={orientation}
    >
      <EditablePattern orientation={orientation} />
    </PrintPreviewContainer>
  );
};

export default PrintPreview;
