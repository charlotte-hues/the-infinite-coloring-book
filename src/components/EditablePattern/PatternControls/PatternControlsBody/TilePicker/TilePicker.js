import React from "react";
import { allPatterns } from "../../../../Tiles/Tiles";
import TileGroupSelector, {
  RandomSelector
} from "./TileGroupSelector/TileGroupSelector";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";

const patternsArray = [];

for (let key in allPatterns) {
  patternsArray.push(key);
}

const getRange = (search, array = patternsArray) => {
  const booleanArray = array.map(name => name.includes(search));
  const low = booleanArray.indexOf(true);
  const high = booleanArray.lastIndexOf(true);

  return { low, high };
};

const TilePicker = props => {
  return (
    <React.Fragment>
      <InputWrapper>
        <RandomSelector />
        <TileGroupSelector range={getRange("OBJECT")} />
      </InputWrapper>
      <InputWrapper>
        <TileGroupSelector range={getRange("STRAIGHT")} />
        <TileGroupSelector range={getRange("CORNER")} />
      </InputWrapper>
      <InputWrapper>
        <TileGroupSelector range={getRange("DIAGONAL")} />
        <TileGroupSelector range={getRange("SQUARE")} />
      </InputWrapper>
    </React.Fragment>
  );
};

export default TilePicker;
