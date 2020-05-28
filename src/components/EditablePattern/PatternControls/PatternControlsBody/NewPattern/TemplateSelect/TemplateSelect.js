import React, { useContext } from "react";
import {
  DispatchContext,
  StateContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import PatternTemplates from "./Templates/Templates";

const TemplateSelect = props => {
  const dispatch = useContext(DispatchContext);
  const { complexity, columns, orientation } = useContext(StateContext);
  const optionsArray = [];

  for (let key in PatternTemplates({ complexity, columns, orientation })) {
    optionsArray.push(key);
  }

  const options = optionsArray.map(option => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  const handleChange = event => {
    dispatch({
      type: "NEW-TEMPLATE",
      template: PatternTemplates({ complexity, columns, orientation })[
        event.target.value
      ]
    });
  };

  return (
    <InputWrapper>
      <select onChange={handleChange}>{options}</select>
    </InputWrapper>
  );
};

export default TemplateSelect;
