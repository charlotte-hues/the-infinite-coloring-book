import React, { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { saveAsPng } from "save-html-as-image";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import NameImage from "./NameImage/NameImage";
import PrintImage from "./PrintImage/PrintImage";
import SaveToAccount from "./SaveToAccount/SaveToAccount";
import Button from "../../../../UI/Button/Button";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";
import * as actions from "../../../../../store/actions/index";

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
  const ref = useRef();

  let DownloadableImage = (
    <ImageWrapper>
      <DownloadablePattern ref={ref} />
    </ImageWrapper>
  );

  return (
    <React.Fragment>
      <NameImage value={props.imageName} update={props.onUpdateImageName} />
      <SaveToAccount />
      <InputWrapper>
        <Button
          onClick={e => downloadImageHandler(e, props.imageName, ref.current)}
        >
          Download
        </Button>
      </InputWrapper>
      <PrintImage />
      {DownloadableImage}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    imageName: state.currentPattern.imageName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdateImageName: newName => dispatch(actions.updateImageName(newName))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Save);
