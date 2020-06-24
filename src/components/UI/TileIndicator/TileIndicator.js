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
    [36, 36, 43, 40],
    [37, 37, 43, 40],
    [35, 35, 43, 40]
  ],
  sad: [
    [35, 35, 52, 47],
    [37, 37, 52, 47]
  ]
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

  const tiles = indicators[props.indicate][instance].map((tile, i) => {
    return (
      <Tile
        key={i}
        click={onClickHandler}
        num={tile}
        patternColor={props.patternColor}
      />
    );
  });

  return <PatternWrapper>{tiles}</PatternWrapper>;
};

export default TileIndicator;
