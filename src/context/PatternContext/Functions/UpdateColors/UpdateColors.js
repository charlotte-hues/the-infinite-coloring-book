import React, { useState } from "react";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import defaultColors from "../../DefaultValues/Colors/Colors";

const updateColors = props => {
  const [activeColor, setActiveColor] = useState(colors.defaultColors[1]);
  const [colors, setColors] = useLocalStorage(
    "colors",
    JSON.stringify(defaultColors)
  );

  const updateColors = () => {
    console.log("It Worked!");
  };

  return { activeColor, colors, updateColors };
};

export default updateColors;
