import { css } from "styled-components";

const sharedButtonStyles = css`
  background: rgba(245, 245, 245, 0);
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
`;

export default sharedButtonStyles;
