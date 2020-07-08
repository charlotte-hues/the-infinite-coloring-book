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
`;

const StyledLink = styled(Link)`
  margin: auto;
  min-width: 280px;
  max-width: 400px;
`;

const PatternCardContainer = styled.ul`
  padding-top: 50px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h3 {
    margin: auto;
  }
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

  const noneSaved = (
    <BodyContainer>
      <h3>You haven't saved any patterns yet</h3>
      <StyledLink to="/create">
        <Button>Get creating!</Button>
      </StyledLink>
    </BodyContainer>
  );

  const notSignedIn = (
    <BodyContainer>
      <h3>You need an account to save and edit patterns</h3>
      <StyledLink
        to={{ pathname: `${location.pathname}/login`, state: { modal: true } }}
      >
        <Button>Log in or sign up</Button>
      </StyledLink>
    </BodyContainer>
  );

  const loadingContent = (
    <BodyContainer>
      <h3>Loading...</h3>
    </BodyContainer>
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

  const body = loading ? (
    loadingContent
  ) : !isAuth ? (
    notSignedIn
  ) : props.patterns.length < 1 ? (
    noneSaved
  ) : (
    <PatternCardContainer>{designListItems}</PatternCardContainer>
  );

  const deleteModal = patternId ? (
    <Modal
      title="Are you sure you want to delete?"
      show={patternId}
      modalClosed={modalCloseHandler}
    >
      {deleteConfirm}
    </Modal>
  ) : null;

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {deleteModal}
      {body}
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
