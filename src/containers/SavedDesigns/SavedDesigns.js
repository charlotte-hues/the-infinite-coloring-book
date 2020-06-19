import React, { useEffect } from "react";
import { connect } from "react-redux";
import PatternContextProvider from "../../context/PatternContext/PatternContext";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import SavedDesignListItem from "../../components/SavedDesignListItem/SavedDesignListItem";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "axios";

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

  const { uid, authToken, loading, onFetchPatterns } = props;

  useEffect(() => {
    if (!uid || !authToken) return;
    onFetchPatterns(authToken, uid);
  }, [uid, authToken, onFetchPatterns]);

  const editHandler = data => {
    props.onLoadPattern(data);
    history.push("/");
  };

  const deleteHandler = id => {
    props.onDeletePattern(id, authToken, props.patterns);
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
  ) : (
    <PatternCardContainer>{designListItems}</PatternCardContainer>
  );

  return (
    <PatternContextProvider>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>My Designs</h1>
        {designs}
      </Container>
    </PatternContextProvider>
  );
};

const mapStateToProps = state => {
  return {
    patterns: state.savedPatterns.patterns,
    loading: state.savedPatterns.loading,
    authToken: state.auth.token,
    uid: state.auth.userId
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
