import React from "react";
import { connect } from "react-redux";
import { PatternActiveSwitch } from "../../../UI/Switch/Switch";
import ColorPicker from "./ColorPicker/ColorPicker";
import * as actions from "../../../../store/actions/index";

const ChangeColor = props => {
  const {
    onUpdateColor,
    activeColorSelection,
    activeBackgroundColor,
    activePatternColor,
    colorArray
  } = props;

  const colorPickerProps = {
    onClick: onUpdateColor,
    activeColorSelection,
    activeBackgroundColor,
    activePatternColor,
    colorArray
  };
  const active = props.activeColorSelection === "pattern";
  return (
    <React.Fragment>
      <PatternActiveSwitch
        onClick={() => props.onSetColorSelection(props.activeColorSelection)}
        active={active}
        background={props.backgroundColor}
      />
      <ColorPicker {...colorPickerProps} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    activeColorSelection: state.patternEditing.activeColorSelection,
    activeBackgroundColor: state.currentPattern.activeBackgroundColor,
    activePatternColor: state.currentPattern.activePatternColor,
    patternColor: state.currentPattern.patternColor,
    backgroundColor: state.currentPattern.backgroundColor,
    colorArray: state.currentPattern.colorArray
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetColorSelection: currentActiveSelection =>
      dispatch(actions.setActiveColorSelection(currentActiveSelection)),
    onUpdateColor: (index, color, activeColorSelection) =>
      dispatch(actions.updateColor(index, color, activeColorSelection))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeColor);
