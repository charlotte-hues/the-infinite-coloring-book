import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const CurvedTR1 = props => (
  <React.Fragment>
    <path d="M0 30C5.52285 30 10 34.4772 10 40M0 20C11.0457 20 20 28.9543 20 40M0 10C16.5685 10 30 23.4315 30 40" />
    <DiagonalPath d="M10 0L0 10M20 0L9 11M30 0L15.5 14.5M40 0L21.5 18.5M40 10L25.5 24.5M40 20L29 31M40 30L30 40" />
  </React.Fragment>
);