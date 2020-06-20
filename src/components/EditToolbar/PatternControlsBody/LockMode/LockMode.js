import React from "react";
import { connect } from "react-redux";
import { OnOffSwitch } from "../../../UI/Switch/Switch";
import { NewButton } from "../../../UI/Button/Button";
import * as actions from "../../../../store/actions/index";

const LockMode = props => {
  const { lockMode, pattern } = props;

  const locked = pattern.some(patternObj => patternObj.locked === true);
  return (
    <React.Fragment>
      <OnOffSwitch
        active={lockMode}
        onClick={() => props.onSetLockMode(!lockMode)}
      />
      <NewButton
        onClick={() => props.onClearLockedTiles(props.pattern)}
        disabled={!locked}
      >
        Clear Locked Tiles
      </NewButton>
      {/* <NewButton onClick={() => props.onRandomisePattern(props.pattern)}>
        Randomise Unlocked Tiles
      </NewButton> */}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    lockMode: state.patternEditing.lockMode,
    pattern: state.currentPattern.pattern
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetLockMode: lockMode => dispatch(actions.setLockMode(lockMode)),
    onClearLockedTiles: currentPattern =>
      dispatch(actions.clearLockedTiles(currentPattern))
    // onRandomisePattern: currentPattern =>
    //   dispatch(actions.randomisePattern(currentPattern))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LockMode);
