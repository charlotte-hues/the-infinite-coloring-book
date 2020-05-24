import React from "react";
import LockModeSwitch from "./LockModeSwitch/LockModeSwitch";
import ClearLockedTiles from "./ClearLockedTiles/ClearLockedTiles";
import Randomise from "./Randomise/Randomise";

const LockMode = props => {
  return (
    <React.Fragment>
      <LockModeSwitch />
      <ClearLockedTiles />
      <Randomise />
    </React.Fragment>
  );
};

export default LockMode;
