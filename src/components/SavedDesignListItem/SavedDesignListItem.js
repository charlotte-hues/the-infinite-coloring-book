import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumnail/Thumbnail";
import PatternInfo from "./PatternInfo/PatternInfo";
import Actions from "./Actions/Actions";

const Container = styled.div`
  position: relative;
  padding: 4px 4px 16px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--surface);
  border-radius: 4px;
  width: 260px;

  box-shadow: var(--shadowSmall);
  margin: 0 20px 20px 0;

  &:hover {
    box-shadow: var(--shadow);
    transform: translateY(-2px) translateX(-2px);
  }
`;

const SavedDesignListItem = props => {
  return (
    <Container>
      <Thumbnail {...props} />
      <PatternInfo {...props} />
      <Actions edit={props.edit} delete={props.delete} />
    </Container>
  );
};

export default SavedDesignListItem;
