import React, { useRef } from "react";
import styled from "styled-components";
import { saveAsPng } from "save-html-as-image";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";

const ImageWrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 1920px;
  opacity: 0;
  z-index: -100;
`;

const downloadImageHandler = (e, name = "the-infinite-coloring-book", ref) => {
  saveAsPng(ref, {
    filename: name,
    printDate: false
  });
};

const Save = props => {
  const ref = useRef();

  let DownloadableImage = (
    <ImageWrapper>
      <DownloadablePattern ref={ref} />
    </ImageWrapper>
  );

  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={e => downloadImageHandler(e, undefined, ref.current)}>
          Save as image
        </Button>
      </InputWrapper>
      {DownloadableImage}
    </React.Fragment>
  );
};

export default Save;
