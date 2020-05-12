import React from "react";

const navigationItem = props => (
  <li>
    <h5 to={props.link}>{props.children}</h5>
  </li>
);

export default navigationItem;
