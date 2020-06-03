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
`;

const navigationItems = props => (
  <ListContainer>
    <NavigationItem link="/" active>
      create
    </NavigationItem>
    <NavigationItem link="/about" active>
      about
    </NavigationItem>
    <NavigationItem link="/login" active>
      login
    </NavigationItem>
  </ListContainer>
);

export default navigationItems;
