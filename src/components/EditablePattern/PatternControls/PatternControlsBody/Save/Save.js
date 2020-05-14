import React, { useContext, useRef } from "react";
import styled from "styled-components";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import Button from "../../../../UI/Button/Button";
import { DispatchContext } from "../../../../../context/PatternContext/PatternContext";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";

const ImageWrapper = styled.div`
  position: absolute;
  width: 1920px;
  height: 1920px;
  opacity: 0;
  z-index: -100;
`;

const Save = props => {
  const { downloadImage } = useContext(DispatchContext);
  const ref = useRef();

  let DownloadableImage = (
    <ImageWrapper>
      <DownloadablePattern ref={ref} />
    </ImageWrapper>
  );

  return (
    <React.Fragment>
      <InputWrapper>
        <Button onClick={e => downloadImage(e, undefined, ref.current)}>
          Save as image
        </Button>
      </InputWrapper>
      {DownloadableImage}
    </React.Fragment>
  );
};

export default Save;
