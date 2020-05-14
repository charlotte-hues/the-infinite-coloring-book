import styled from "styled-components";

const SingleLineIconsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props =>
    props.direction === "vertical" ? "column" : "row"};
  justify-content: space-between;
  width: ${props => (props.direction === "vertical" ? "auto" : "100%")};
  height: ${props => (props.direction === "vertical" ? "100%" : "auto")};
  padding-bottom: 0px;
  border-bottom: none;
`;

export default SingleLineIconsContainer;
