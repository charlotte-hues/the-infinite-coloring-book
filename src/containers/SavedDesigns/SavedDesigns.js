import React, { useEffect, useState, useContext } from "react";
import PatternContextProvider from "../../context/PatternContext/PatternContext";
import { useHistory } from "react-router-dom";
import { DispatchContext } from "../../context/PatternContext/PatternContext";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";
import SavedDesignListItem from "../../components/SavedDesignListItem/SavedDesignListItem";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const SavedDesigns = props => {
  const [savedPatterns, setSavedPatterns] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://the-infinite-coloring-book.firebaseio.com/patterns.json")
      .then(response => {
        const fetchedPatterns = [];
        for (let key in response.data) {
          fetchedPatterns.push({ ...response.data[key], id: key });
        }
        setLoading(false);
        setSavedPatterns(fetchedPatterns);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const editHandler = data => {
    dispatch({ type: "LOAD-PATTERN", data: data });
    history.push("/");
  };

  const designListItems = !savedPatterns
    ? null
    : savedPatterns.map(data => {
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
            />
          </li>
        );
      });

  const designs = loading ? <h4>Loading...</h4> : <ul>{designListItems}</ul>;

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

export default SavedDesigns;
