import React from "react";
import styled from "styled-components";
import Thumbnail from "./Thumnail/Thumbnail";
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Container = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const SavedDesignListItem = props => {
  const now = dayjs();
  return (
    <Container>
      <Thumbnail
        onClick={props.edit}
        patterns={props.patterns}
        backgroundColor={props.backgroundColor}
        patternColor={props.patternColor}
        columns={props.columns}
        orientation={props.orientation}
      />
      <h4>{props.name}</h4>
      <h5>{`Created: ${dayjs(props.createdDate).format("DD MMMM YYYY")}`}</h5>
      <h5>{`edited: ${dayjs(props.lastUpdated).from(now)}`}</h5>
      <div>
        <button onClick={props.edit}>edit</button>
        <button onClick={props.delete}>delete</button>
      </div>
    </Container>
  );
};

export default SavedDesignListItem;
