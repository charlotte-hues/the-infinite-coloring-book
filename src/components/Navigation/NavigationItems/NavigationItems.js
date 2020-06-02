import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem.js";

const navigationItems = props => (
  <ul>
    <NavigationItem link="/create" active>
      create
    </NavigationItem>
    <NavigationItem link="/about" active>
      about
    </NavigationItem>
  </ul>
);

export default navigationItems;
