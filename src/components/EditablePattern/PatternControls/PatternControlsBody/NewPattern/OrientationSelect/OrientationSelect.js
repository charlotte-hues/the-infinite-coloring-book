import React, { useContext, useState } from "react";
import { PatternContext } from "../../../../../../context/PatternContext";
import SingleLineInput from "../../SingleLineInput/SingleLineInput";
import { IconButton, IconsContainer } from "../../../../../UI/Button/Button";
import { OrientationIcons } from "../../../IconButtons/IconButtons";

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
      <li key={orientation}>
        <IconButton
          disabled={active}
          onClick={() => updateOrientationHandler(orientation)}
        >
          <OrientationIcons orientation={orientation} active={active} />
        </IconButton>
      </li>
    );
  });

  return (
    <SingleLineInput label="orientation:">
      <IconsContainer>{orientationButtons}</IconsContainer>
    </SingleLineInput>
  );
};

export default OrientationSelect;
