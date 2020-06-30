import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 240px;
  height: 50px;
  padding: 5px 0 16px 5px;
`;

const CardHeading = styled.h4`
  color: var(--black);
  margin: 0;
  font-size: 0.9rem;
`;

const CardInfo = styled.h5`
  color: var(--dark);
  font-size: 0.77rem;
  margin: 0;
`;

const SmallCardInfo = styled.h5`
  position: absolute;
  left: 0;
  bottom: 0;
  color: var(--dark);
  font-size: var(--smallestFont);
  margin: 0 0 4px 10px;
`;

const PatternInfo = props => {
  const now = dayjs();
  return (
    <Container>
      <CardHeading>{props.name}</CardHeading>
      <CardInfo>{`edited ${dayjs(props.lastUpdated).from(now)}`}</CardInfo>
      <SmallCardInfo>{`Created: ${dayjs(props.createdDate).format(
        "DD MMMM YYYY"
      )}`}</SmallCardInfo>
    </Container>
  );
};

export default PatternInfo;
