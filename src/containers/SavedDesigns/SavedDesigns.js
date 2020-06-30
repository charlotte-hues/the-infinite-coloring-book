import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import SavedDesignListItem from "../../components/SavedDesignListItem/SavedDesignListItem";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";
import InputWrapper from "../../components/UI/InputWrapper/InputWrapper";
import { Spacer } from "../../components/UI/Divider/Divider";
import Button from "../../components/UI/Button/Button";

const Container = styled(motion.div)`
height: 100%;
width: 90vw;
margin: auto;
}
`;

const PatternCardContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const SavedDesigns = props => {
  const history = useHistory();
  const location = useLocation();
  const [patternId, setPatternId] = useState(null);

  const { loading, onFetchPatterns, isAuth, uid, token } = props;

  useEffect(() => {
    if (!uid || !token) return;
    onFetchPatterns(token, uid);
  }, [uid, token, onFetchPatterns]);

  const modalCloseHandler = mounted => {
    if (mounted) setPatternId(null);
  };

  const editHandler = data => {
    props.onLoadPattern(data);
    history.push("/create");
  };

  const onConfirmDeleteHandler = () => {
    props.onDeletePattern(patternId, token, props.patterns);
    setPatternId(null);
  };

  const deleteHandler = id => {
    setPatternId(id);
  };

  const deleteConfirm = (
    <React.Fragment>
      <p>This action can't be undone</p>
      <InputWrapper>
        <Button onClick={modalCloseHandler} secondary>
          Cancel
        </Button>
        <Spacer width="20px" />
        <Button onClick={onConfirmDeleteHandler}>Confirm</Button>
      </InputWrapper>
    </React.Fragment>
  );

  const designListItems = !props.patterns
    ? null
    : props.patterns
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        .map(data => {
          return (
            <li key={data.id}>
              <SavedDesignListItem
                name={data.patternData.imageName}
                pattern={data.patternData.pattern}
                backgroundColor={data.patternData.backgroundColor}
                patternColor={data.patternData.patternColor}
                columns={data.patternData.columns}
                orientation={data.patternData.orientation}
                edit={() => editHandler(data)}
                delete={() => deleteHandler(data.id)}
                createdDate={data.createdDate}
                lastUpdated={data.lastUpdated}
              />
            </li>
          );
        });

  const designs = loading ? (
    <h4>Loading...</h4>
  ) : !isAuth ? (
    <Link
      to={{ pathname: `${location.pathname}/login`, state: { modal: true } }}
    >
      <button>Log in to see your saved designs</button>
    </Link>
  ) : (
    <PatternCardContainer>{designListItems}</PatternCardContainer>
  );

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {patternId ? (
        <Modal
          title="Are you sure you want to delete?"
          show={patternId}
          modalClosed={modalCloseHandler}
        >
          {deleteConfirm}
        </Modal>
      ) : null}
      <h1>My Designs</h1>
      {designs}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    patterns: state.savedPatterns.patterns,
    loading: state.savedPatterns.loading,
    isAuth: state.auth.currentUser !== null,
    uid: state.auth.uid,
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchPatterns: (token, uid) =>
      dispatch(actions.fetchPatterns(token, uid)),
    onLoadPattern: patternData => dispatch(actions.loadPattern(patternData)),
    onDeletePattern: (id, token, patterns) =>
      dispatch(actions.deletePattern(id, token, patterns))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SavedDesigns, axios));
