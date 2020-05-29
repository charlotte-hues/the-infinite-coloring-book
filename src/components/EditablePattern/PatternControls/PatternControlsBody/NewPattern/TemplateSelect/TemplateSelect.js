import React, { useContext, useEffect, useState } from "react";
import {
  DispatchContext,
  StateContext
} from "../../../../../../context/PatternContext/PatternContext";
import InputWrapper from "../../../PatternControlsInputs/InputWrapper/InputWrapper";
import Dropdown, { ListItem } from "../../../../../UI/Dropdown/Dropdown";
import PatternTemplates from "./Templates/Templates";

const TemplateSelect = props => {
  const dispatch = useContext(DispatchContext);
  const { complexity, columns, orientation } = useContext(StateContext);
  const [selected, setSelected] = useState("template - random");
  const optionsArray = [];

  for (let key in PatternTemplates({ complexity, columns, orientation })) {
    optionsArray.push(key);
  }

  const options = optionsArray.map(option => {
    return (
      <ListItem
        key={option}
        value={option}
        onClick={() => handleChange(option)}
      >
        {option}
      </ListItem>
    );
  });

  const handleChange = template => {
    setSelected(`template - ${template}`);
    dispatch({
      type: "NEW-TEMPLATE",
      template: PatternTemplates({ complexity, columns, orientation })[template]
    });
  };

  useEffect(() => {
    setSelected("template - random");
  }, [complexity, orientation]);

  return (
    <InputWrapper>
      <Dropdown onChange={handleChange} value={selected}>
        {options}
      </Dropdown>
    </InputWrapper>
  );
};

export default TemplateSelect;
