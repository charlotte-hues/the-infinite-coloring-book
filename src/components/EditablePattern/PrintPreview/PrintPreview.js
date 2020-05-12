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
  width: ${props => (props.orientation === "landscape" ? "660px" : "490px")};
  height: ${props =>
    props.orientation === "portrait"
      ? "660px"
      : props.orientation === "landscape"
      ? "500px"
      : "490px"};
  box-shadow: var(--shadow);
  background: var(--surface);
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
      props.orientation === "landscape" ? "610px" : "340px"};
    max-height: ${props =>
      props.orientation === "portrait"
        ? "450px"
        : props.orientation === "landscape"
        ? "480px"
        : "340px"};
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
      <EditablePattern orientation={orientation} />
    </PrintPreviewContainer>
  );
};

export default PrintPreview;
