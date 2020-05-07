import React, { useContext, useEffect, useState } from "react";
import { PatternContext } from "../../../context/PatternContext";
import EditablePattern from "../EditablePattern";
import styled from "styled-components";

const PrintPreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 18px;
  justify-items: center;
  margin: 10px;
  width: ${props => (props.orientation === "landscape" ? "610px" : "440px")};
  height: ${props =>
    props.orientation === "portrait"
      ? "610px"
      : props.orientation === "landscape"
      ? "490px"
      : "440px"};
  box-shadow: var(--shadow);
  background: var(--surface);

  @media only screen and (max-width: 1200px) {
    width: ${props => (props.orientation === "landscape" ? "610px" : "400px")};
    height: ${props =>
      props.orientation === "portrait"
        ? "540px"
        : props.orientation === "landscape"
        ? "490px"
        : "400px"};
  }

  @media only screen and (max-width: 780px) {
    width: ${props =>
      props.orientation === "landscape" && props.windowWidth
        ? `${props.windowWidth - 30}px`
        : `${props.windowWidth - 30}px`};
    height: ${props =>
      props.orientation === "portrait" && props.windowWidth
        ? `${(props.windowWidth - 30) * 1.39}px`
        : props.orientation === "landscape"
        ? `${(props.windowWidth - 30) * 0.8}px`
        : `${props.windowWidth - 30}px`};
    max-width: ${props =>
      props.orientation === "landscape" ? "610px" : "400px"};
    max-height: ${props =>
      props.orientation === "portrait"
        ? "540px"
        : props.orientation === "landscape"
        ? "490px"
        : "400px"};
  }

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
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const { orientation } = useContext(PatternContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(document.body.clientWidth);
    });
  }, []);

  return (
    <PrintPreviewContainer
      backgroundColor={props.backgroundColor}
      orientation={orientation}
      windowWidth={windowWidth}
    >
      <EditablePattern />
    </PrintPreviewContainer>
  );
};

export default PrintPreview;
