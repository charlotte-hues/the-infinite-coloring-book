import React, { useContext } from "react";
import { StateContext } from "../../../../../../../../context/PatternContext/PatternContext";

export const NewIcon = (
  <React.Fragment>
    <circle cx="16" cy="16" r="15" />
    <path d="M16 7V24 M24.5 15.5L7.5 15.5" />
  </React.Fragment>
);

export const ColourIcon = () => {
  const { patternColor } = useContext(StateContext);
  return (
    <React.Fragment>
      <path d="M2 12V17C2 19.2091 3.79086 21 6 21H11M2 12V2C2 1.44771 2.44772 1 3 1H8M2 12H8M30 12V17C30 19.2091 28.2091 21 26 21H21M30 12V2C30 1.44772 29.5523 1 29 1H14M30 12H14M8 1V13C8 14.6569 9.34315 16 11 16V16C12.6569 16 14 14.6569 14 13V1M8 1H14M21 21V29C21 30.1046 20.1046 31 19 31H13C11.8954 31 11 30.1046 11 29V21M21 21H11" />
      <circle cx="16" cy="27" r="1" />

      <path
        d="M13 2H9V13C9 14.1046 9.89543 15 11 15C12.1046 15 13 14.1046 13 13V2Z"
        fill={patternColor}
        stroke="none"
      />
    </React.Fragment>
  );
};

export const SaveIcon = (
  <React.Fragment>
    <path d="M22 1L28.7071 7.70711C28.8946 7.89464 29 8.149 29 8.41421V30C29 30.5523 28.5523 31 28 31H4C3.44772 31 3 30.5523 3 30V2C3 1.44772 3.44772 1 4 1H8M22 1H8M22 1V11C22 11.5523 21.5523 12 21 12H9C8.44772 12 8 11.5523 8 11V1 M18 4V9" />
  </React.Fragment>
);

export const PrintIcon = (
  <React.Fragment>
    <path d="M25 1H7V13H25V1Z" />
    <path d="M6 27H1V15C1 13.8954 1.89543 13 3 13H29C30.1046 13 31 13.8954 31 15V27H26" />
    <rect x="7" y="19" width="18" height="12" />
    <path d="M10 27H22 M10 23H22" />
  </React.Fragment>
);
