import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../../../../../../context/PatternContext/PatternContext";

export const NewIcon = (
  <React.Fragment>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 9L16 23 M23 16L9 16" />
  </React.Fragment>
);

export const ColourIcon = () => {
  return (
    <React.Fragment>
      <path d="M14 5L1 18L14 31L27 18L14 5ZM14 5L10 1" />
      <path d="M14 29L3 18H25L14 29Z" fill="var(--orange)" stroke="none" />
      <path
        d="M30 24C30 25.1046 29.1046 26 28 26C26.8954 26 26 25.1046 26 24C26 22.8954 28 20 28 20C28 20 30 22.8954 30 24Z"
        fill="var(--orange)"
        stroke="var(--orange)"
      />
    </React.Fragment>
  );
};

const TransitionPath = styled.path`
  transition: all 0.2s ease;
`;

export const LockIcon = props => {
  const { patterns } = useContext(StateContext);
  const locked = patterns.some(patternObj => patternObj.locked === true);
  let path = locked
    ? "M8 29L5 27V13H27V27L24 29H8Z M10 13V8C10 5 13 3 16 3C19 3 22 5 22 8V13"
    : "M8 29L5 27V13H27V27L24 29H8Z M10 13V8C10 5 13 3 16 3C19 3 22 5 22 8V8.5";

  return (
    <React.Fragment>
      <TransitionPath d={path} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 20.7324C17.5978 20.3866 18 19.7403 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19C14 19.7403 14.4022 20.3866 15 20.7324V23C15 23.5523 15.4477 24 16 24C16.5523 24 17 23.5523 17 23V20.7324Z"
        fill="#483E3B"
        stroke="none"
      />
    </React.Fragment>
  );
};

export const SaveIcon = (
  <React.Fragment>
    <path d="M12 14H5V29H27V14H20 M16 21V4M16 4L10 10M16 4L22 10" />
  </React.Fragment>
);

export const PatternIcon = (
  <React.Fragment>
    <path
      d="M3 9.5L9.5 3M3 16L16 3M3 22.5L22.5 3M3 29L29 3M9.5 29L29 9.5M29 16L16 29M22.5 29L29 22.5"
      stroke="var(--black)"
    />
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
