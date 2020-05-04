import React from "react";
import styled from "styled-components";

const RangeSlider = styled.input`
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  
  &:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  
  &::-ms-track {
    width: 100%;
    cursor: pointer;
  
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--orange);
    cursor: pointer;
    margin-top: -7px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }
  
  /* All the same stuff for Firefox */
  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--orange);
    cursor: pointer;
  }

  &::-ms-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--orange);
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: var(--trim);
    border-radius: 6px;
  }
  
  &::-webkit-slider-runnable-track {
    background: var(--trim);
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: var(--trim);
    border-radius: 6px;
  }
  
  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: var(--trim);
    border-radius: 6px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: var(--trim);
  }
  input[type=range]::-ms-fill-upper {
    background: var(--trim);
    border-radius: 6px;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: var(--trim);
  }

`;

const slider = props => {
  return <RangeSlider type="range" min={props.min} max={props.max} />;
};

export default slider;
