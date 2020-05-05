import React from "react";
import Label from "../../../../UI/FormControls/Label/Label";
import FormControlWrapper from "../../../../UI/FormControls/FormControlWrapper/FormControlWrapper";

const SingleLineInput = props => (
  <FormControlWrapper>
    <Label for={props.label}>{props.label}</Label>
    {props.children}
  </FormControlWrapper>
);

export default SingleLineInput;
