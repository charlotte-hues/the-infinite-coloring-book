import React from "react";
import Slider from "../../../../UI/Slider/Slider";
import Button from "../../../../UI/Button/Button";

const NewPattern = props => (
  <React.Fragment>
    <Slider min="0" max="2" />
    <Button onClick={props.randomise}>Randomise</Button>
  </React.Fragment>
);

export default NewPattern;
