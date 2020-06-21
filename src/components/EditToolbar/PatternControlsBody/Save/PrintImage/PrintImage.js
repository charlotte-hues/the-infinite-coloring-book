import React from "react";
import { WrappedButton } from "../../../../UI/Button/Button";

const PrintImage = props => {
  return (
    <React.Fragment>
      <WrappedButton onClick={() => window.print()}>Print</WrappedButton>
    </React.Fragment>
  );
};

export default PrintImage;
