import React from "react";
import { connect } from "react-redux";
import { PatternActiveSwitch } from "../../PatternControlsInputs/Inputs/Switch/Switch";
import ColorPicker from "./ColorPicker/ColorPicker";
import * as actions from "../../../../../store/actions/index";

const ChangeColor = props => {
  const active = props.activeColorSelection === "pattern";
  return (
    <React.Fragment>
      <PatternActiveSwitch
        onClick={() => props.onSetColorSelection(props.activeColorSelection)}
        active={active}
        background={props.backgroundColor}
      />
      <ColorPicker />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    activeColorSelection: state.patternEditing.activeColorSelection,
    activeBackgroundColor: state.currentPattern.activeBackgroundColor,
    activePatternColor: state.currentPattern.activePatternColor,
    patternColor: state.currentPattern.patternColor,
    backgroundColor: state.currentPattern.backgroundColor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetColorSelection: currentActiveSelection =>
      dispatch(actions.setActiveColorSelection(currentActiveSelection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeColor);
