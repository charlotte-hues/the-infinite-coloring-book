import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem.js";

const navigationItems = props => (
  <ul>
    <NavigationItem link="/pattern-maker" active>
      Pattern Creator
    </NavigationItem>
  </ul>
);

export default navigationItems;
