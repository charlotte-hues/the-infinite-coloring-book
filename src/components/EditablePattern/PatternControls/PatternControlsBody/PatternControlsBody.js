import React from "react";
import styled from "styled-components";
import NewPattern from "./NewPattern/NewPattern";
import ChangeColor from "./ChangeColor/ChangeColor";
import Save from "./Save/Save";
import Print from "./Print/Print";

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

const PatternControlsBody = props => {
  let activeGroup;
  switch (props.active) {
    case "new":
      activeGroup = <NewPattern />;
      break;
    case "color":
      activeGroup = <ChangeColor />;
      break;
    case "save":
      activeGroup = <Save />;
      break;
    case "print":
      activeGroup = <Print />;
      break;
    default:
      activeGroup = <NewPattern />;
  }

  return <StyledDiv>{activeGroup}</StyledDiv>;
};

export default PatternControlsBody;
