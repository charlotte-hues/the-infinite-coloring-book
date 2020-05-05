import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PatternContext } from "../../../../../../context/PatternContext";
import SingleLineInput from "../../SingleLineInput/SingleLineInput";
import { IconButton } from "../../../../../UI/Button/Button";
import { OrientationIcons } from "../../../IconButtons/IconButtons";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const orientations = ["portrait", "landscape", "square"];

const OrientationSelect = props => {
  const { orientation, updateOrientation } = useContext(PatternContext);
  const [activeOrientation, setActiveOrientation] = useState(orientation);

  const updateOrientationHandler = orientation => {
    setActiveOrientation(orientation);
    updateOrientation(orientation);
  };

  const orientationButtons = orientations.map(orientation => {
    const active = activeOrientation === orientation;
    return (
      <IconButton
        key={orientation}
        disabled={active}
        onClick={() => updateOrientationHandler(orientation)}
      >
        <OrientationIcons orientation={orientation} active={active} />
      </IconButton>
    );
  });

  return (
    <SingleLineInput label="orientation:">
      <ButtonsContainer>{orientationButtons}</ButtonsContainer>
    </SingleLineInput>
  );
};

export default OrientationSelect;
