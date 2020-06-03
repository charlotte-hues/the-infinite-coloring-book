import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem.js";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 780px) {
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
  }
`;

const navigationItems = props => (
  <ListContainer>
    <NavigationItem link="/" active>
      create
    </NavigationItem>
    <NavigationItem link="/login" active>
      login
    </NavigationItem>
    <NavigationItem link="/about" active>
      about
    </NavigationItem>
  </ListContainer>
);

export default navigationItems;
