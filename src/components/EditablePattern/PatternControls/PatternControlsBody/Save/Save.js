import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { saveAsJpeg } from "save-html-as-image";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import NameImage from "./NameImage/NameImage";
import Button from "../../../../UI/Button/Button";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";
import { StateContext } from "../../../../../context/PatternContext/PatternContext";

const ImageWrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 1920px;
  opacity: 0;
  z-index: -100;
`;

const downloadImageHandler = (e, name = "the-infinite-coloring-book", ref) => {
  saveAsJpeg(ref, {
    filename: name,
    printDate: false
  });
};

const Save = props => {
  const { imageName } = useContext(StateContext);
  const ref = useRef();

  let DownloadableImage = (
    <ImageWrapper>
      <DownloadablePattern ref={ref} />
    </ImageWrapper>
  );

  return (
    <React.Fragment>
      <NameImage />
      <InputWrapper>
        <Button onClick={e => downloadImageHandler(e, imageName, ref.current)}>
          Save as image
        </Button>
      </InputWrapper>
      {DownloadableImage}
    </React.Fragment>
  );
};

export default Save;
