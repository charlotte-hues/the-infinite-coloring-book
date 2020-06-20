import React, { useEffect, useState } from "react";
import InputWrapper from "../../../../UI/InputWrapper/InputWrapper";
import Dropdown, { ListItem } from "../../../../UI/Dropdown/Dropdown";
import PatternTemplates from "./Templates/Templates";

const TemplateSelect = ({ complexity, columns, orientation, onUpdate }) => {
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
    const templateData = PatternTemplates({ complexity, columns, orientation })[
      template
    ];
    onUpdate(templateData);
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
