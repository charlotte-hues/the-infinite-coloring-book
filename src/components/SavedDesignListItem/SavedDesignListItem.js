import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumnail/Thumbnail";

const Container = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

const SavedDesignListItem = props => {
  return (
    <Container>
      <Thumbnail />
      <h4>{props.name}</h4>
      <div>
        <button onClick={props.edit}>edit</button>
        <button onClick={props.delete}>delete</button>
      </div>
    </Container>
  );
};

export default SavedDesignListItem;
