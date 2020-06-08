import styled from "styled-components";

const horizontalDivider = styled.hr`
  width: 100%;
`;

export const Spacer = styled.div`
  background: none;
  border: none;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default horizontalDivider;
