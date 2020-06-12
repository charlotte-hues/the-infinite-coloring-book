import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import PatternContextProvider from "../../context/PatternContext/PatternContext";
import { useHistory } from "react-router-dom";
import { DispatchContext } from "../../context/PatternContext/PatternContext";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import SavedDesignListItem from "../../components/SavedDesignListItem/SavedDesignListItem";
import * as actions from "../../store/actions/index";

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
  const [savedPatterns, setSavedPatterns] = useState(null);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const { uid, authToken, loading } = props;

  useEffect(() => {
    if (!uid || !authToken) return;
    props.onFetchPatterns(authToken, uid);
  }, [uid, authToken]);

  const editHandler = data => {
    dispatch({ type: "LOAD-PATTERN", data: data });
    history.push("/");
  };

  const designListItems = !props.patterns
    ? null
    : props.patterns
        .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
        .map(data => {
          return (
            <li key={data.id}>
              <SavedDesignListItem
                name={data.imageName}
                patterns={data.patterns}
                backgroundColor={data.backgroundColor}
                patternColor={data.patternColor}
                columns={data.columns}
                orientation={data.orientation}
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

  const deleteHandler = id => {
    axios
      .delete(
        "https://the-infinite-coloring-book.firebaseio.com/patterns/" +
          id +
          ".json"
      )
      .then(response => {
        const newPatternsArray = [...savedPatterns].filter(
          patternObj => patternObj.id !== id
        );
        setSavedPatterns(newPatternsArray);
      })
      .catch(error => console.log(error));
  };

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
    patterns: state.patterns.patterns,
    loading: state.patterns.loading,
    authToken: state.auth.token,
    uid: state.auth.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchPatterns: (token, uid) => dispatch(actions.fetchPatterns(token, uid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedDesigns);
