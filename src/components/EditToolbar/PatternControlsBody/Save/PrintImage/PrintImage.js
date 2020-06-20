import React from "react";
import { NewButton } from "../../../../UI/Button/Button";

const PrintImage = props => {
  return (
    <React.Fragment>
      <NewButton onClick={() => window.print()}>Print</NewButton>
    </React.Fragment>
  );
};

export default PrintImage;
