import React from "react";
import Slider from "../../../../UI/Slider/Slider";
import InputWrapper from "../../../../UI/InputWrapper/InputWrapper";

const HslSliders = props => (
  <React.Fragment>
    <InputWrapper>
      <Slider min="0" max="360" />
    </InputWrapper>
    <InputWrapper>
      <Slider min="0" max="100" />
    </InputWrapper>
    <InputWrapper>
      <Slider min="0" max="100" />
    </InputWrapper>
  </React.Fragment>
);

export default HslSliders;
