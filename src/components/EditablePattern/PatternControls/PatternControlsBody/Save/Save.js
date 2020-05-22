import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { saveAsPng } from "save-html-as-image";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import NameImage from "./NameImage/NameImage";
import PrintImage from "./PrintImage/PrintImage";
import SaveToAccount from "./SaveToAccount/SaveToAccount";
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
  saveAsPng(ref, {
    filename: name,
    printDate: false,
    forceFixText: true
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
      <SaveToAccount />
      <InputWrapper>
        <Button onClick={e => downloadImageHandler(e, imageName, ref.current)}>
          Download
        </Button>
      </InputWrapper>
      <PrintImage />
      {DownloadableImage}
    </React.Fragment>
  );
};

export default Save;
