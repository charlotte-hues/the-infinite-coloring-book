import React, { useState } from "react";
import styled from "styled-components";
import Tile from "../../Tiles/Tiles";

const PatternWrapper = styled.div`
  display: grid;
  grid: auto-flow / repeat(2, 1fr);
  height: 100px;
  width: 100px;
  margin: auto;
  margin-top: 10px;
`;

const indicators = {
  smile: [
    [29, 29, 43, 40],
    [28, 28, 43, 40],
    [23, 23, 43, 40]
  ],
  sad: [29, 29, 44, 39]
};

const TileIndicator = props => {
  const [instance, setInstance] = useState(0);

  const onClickHandler = () => {
    const max = indicators[props.indicate].length - 1;
    if (instance < max) {
      setInstance(instance + 1);
    } else {
      setInstance(0);
    }
  };

  const tiles = indicators[props.indicate][instance].map(tile => {
    return (
      <Tile
        click={onClickHandler}
        num={tile}
        patternColor={props.patternColor}
      />
    );
  });

  return <PatternWrapper>{tiles}</PatternWrapper>;
};

export default TileIndicator;
