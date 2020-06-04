import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
height: 100%;
width: 80vw;
margin: auto;
}
`;

const SavedDesigns = props => {
  const [patterns, setPatterns] = useState();

  useEffect(() => {
    axios
      .get("https://the-infinite-coloring-book.firebaseio.com/patterns.json")
      .then(response => {
        const fetchedPatterns = [];
        for (let key in response.data) {
          fetchedPatterns.push({ ...response.data[key], id: key });
        }
        setPatterns(fetchedPatterns);
      })
      .catch(error => console.log(error));
  }, []);

  const logHandler = () => console.log(patterns);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 onClick={logHandler}>My Designs</h1>
    </Container>
  );
};

export default SavedDesigns;
