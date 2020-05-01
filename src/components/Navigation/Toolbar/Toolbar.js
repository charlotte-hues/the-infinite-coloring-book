import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header>
    <div onClick={props.drawerToggleClicked}>{/* Hamburger Icon */}</div>

    <div>{/* Logo */}</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
