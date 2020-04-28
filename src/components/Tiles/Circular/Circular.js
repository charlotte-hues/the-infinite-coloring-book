import React from "react";
import { DiagonalPath } from "../Styles/Styles";

export const Flower = props => (
  <React.Fragment>
    <circle cx="20" cy="20" r="10" />
    <path d="M20 10V0M0 20H10M20 30V40M30 20H40M12.9289 12.9289L5 5M5 35L12.9289 27.0711M27.0711 27.0711L35 35M27.0711 12.9289L35 5" />
    <circle cx="20" cy="20" r="4" />
    <DiagonalPath d="M0 10L10 0M30 40L40 30M0 30L10 40M30 0L40 10" />
  </React.Fragment>
);
