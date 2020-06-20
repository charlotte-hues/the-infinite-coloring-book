import React, { useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { saveAsPng } from "save-html-as-image";
import NameImage from "./NameImage/NameImage";
import PrintImage from "./PrintImage/PrintImage";
import SaveToAccount from "./SaveToAccount/SaveToAccount";
import { NewButton } from "../../../UI/Button/Button";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";
import * as actions from "../../../../store/actions/index";

const Container = styled.div`
  position: relative;
  display: inline-block;
  height: 1px;
  width: 1px;
  max-width: 10px;
  max-height: 10px;
  overflow: hidden;
  background: red;
  z-index: -100;
`;

const ImageWrapper = styled.div`
  // position: absolute;
  width: 1920px;
  height: 1920px;
  opacity: 0;
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
    <Container>
      <ImageWrapper>
        <DownloadablePattern
          ref={ref}
          patterns={props.patterns}
          columns={props.columns}
          patternColor={props.patternColor}
          backgroundColor={props.backgroundColor}
        />
      </ImageWrapper>
    </Container>
  );

  return (
    <React.Fragment>
      <NameImage value={props.imageName} update={props.onUpdateImageName} />
      <SaveToAccount />
      <NewButton
        onClick={e => downloadImageHandler(e, props.imageName, ref.current)}
      >
        Download
      </NewButton>
      <PrintImage />
      {DownloadableImage}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    imageName: state.currentPattern.imageName,
    data: state.currentPattern,
    edited: state.currentPattern.edited,

    patterns: state.currentPattern.pattern,
    columns: state.currentPattern.columns,
    patternColor: state.currentPattern.patternColor,
    backgroundColor: state.currentPattern.backgroundColor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdateImageName: newName => dispatch(actions.updateImageName(newName)),
    onSaveNewPattern: (patternData, token, patternId) =>
      dispatch(actions.saveNewPattern(patternData, token)),
    onSaveExistingPattern: (patternData, token) =>
      dispatch(actions.saveExistingPattern(patternData, token))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Save);
