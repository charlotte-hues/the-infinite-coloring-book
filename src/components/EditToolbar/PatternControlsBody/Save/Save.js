import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { saveAsPng } from "save-html-as-image";
import NameImage from "./NameImage/NameImage";
import PrintImage from "./PrintImage/PrintImage";
import SaveToAccount from "./SaveToAccount/SaveToAccount";
import { WrappedButton } from "../../../UI/Button/Button";
import DownloadablePattern from "./DownloadablePattern/DownloadablePattern";
import Modal from "../../../../components/UI/Modal/Modal";
import SaveSuccessful from "./SaveSuccessful/SaveSuccessful";
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
  const history = useHistory();
  const ref = useRef();
  const [viewDesigns, setViewDesigns] = useState(false);

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

  const closeModalHandler = mounted => {
    if (mounted) {
      props.confirmNotice();
    } else {
      if (viewDesigns) {
        history.replace("/mydesigns");
      }
    }
  };

  const viewDesignsHandler = () => {
    setViewDesigns(true);
    props.confirmNotice();
  };

  return (
    <React.Fragment>
      <Modal
        show={props.saved}
        modalClosed={closeModalHandler}
        title="Save Successful"
      >
        <SaveSuccessful
          closeModal={closeModalHandler}
          viewDesigns={viewDesignsHandler}
        />
      </Modal>
      <NameImage value={props.imageName} update={props.onUpdateImageName} />
      <SaveToAccount />
      <WrappedButton
        onClick={e => downloadImageHandler(e, props.imageName, ref.current)}
      >
        Download
      </WrappedButton>
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
    saved: state.patternEditing.saved,

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
      dispatch(actions.saveExistingPattern(patternData, token)),
    confirmNotice: () => dispatch(actions.clearNotice())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Save);
