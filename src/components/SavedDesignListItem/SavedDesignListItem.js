import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumnail/Thumbnail";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SavedDesignListItem = props => {
  return (
    <Container>
      <Thumbnail />
      <h4>{props.name}</h4>
      <button onClick={props.edit}>edit</button>
      <button onClick={props.delete}>delete</button>
    </Container>
  );
};

export default SavedDesignListItem;
