import React from "react";
import ClearLockedTiles from "./ClearLockedTiles/ClearLockedTiles";
import Randomise from "./Randomise/Randomise";

const LockMode = props => {
  return (
    <React.Fragment>
      <ClearLockedTiles />
      <Randomise />
    </React.Fragment>
  );
};

export default LockMode;
