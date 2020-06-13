import React from "react";
import { connect } from "react-redux";
import { allPatterns } from "../../../../Tiles/Tiles";
import TileGroupSelector, {
  RandomSelector
} from "./TileGroupSelector/TileGroupSelector";
import InputWrapper from "../../PatternControlsInputs/InputWrapper/InputWrapper";
import * as actions from "../../../../../store/actions/index";

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
  const tileSelectorProps = groupName => {
    return {
      onClick: props.onSetActivePattern,
      activePattern: props.activePattern,
      range: getRange(groupName)
    };
  };

  return (
    <React.Fragment>
      <InputWrapper>
        <RandomSelector
          activePattern={props.activePattern}
          onClick={props.onSetActivePattern}
        />
        <TileGroupSelector {...tileSelectorProps("OBJECT")} />
      </InputWrapper>
      <InputWrapper>
        <TileGroupSelector {...tileSelectorProps("STRAIGHT")} />
        <TileGroupSelector {...tileSelectorProps("CORNER")} />
      </InputWrapper>
      <InputWrapper>
        <TileGroupSelector {...tileSelectorProps("DIAGONAL")} />
        <TileGroupSelector {...tileSelectorProps("SQUARE")} />
      </InputWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    activePattern: state.patternEditing.activePattern
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetActivePattern: num => dispatch(actions.setActivePattern(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TilePicker);
