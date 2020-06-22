import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import SavedDesignListItem from "../../components/SavedDesignListItem/SavedDesignListItem";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "axios";
import { fbAuth } from "../../configs/firebase.config";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
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

  const { loading, onFetchPatterns, isAuth, currentUser } = props;

  useEffect(() => {
    if (!currentUser) return;
    onFetchPatterns(currentUser);
  }, [currentUser, onFetchPatterns]);

  const editHandler = data => {
    props.onLoadPattern(data);
    history.push("/");
  };

  const deleteHandler = id => {
    props.onDeletePattern(id, currentUser.xa, props.patterns);
  };

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
      <h1>My Designs</h1>
      {designs}
      <button
        onClick={() =>
          fbAuth
            .sendPasswordResetEmail(currentUser.email)
            .then(response => console.log(response))
        }
      >
        ResetPassword
      </button>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    patterns: state.savedPatterns.patterns,
    loading: state.savedPatterns.loading,
    isAuth: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
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
