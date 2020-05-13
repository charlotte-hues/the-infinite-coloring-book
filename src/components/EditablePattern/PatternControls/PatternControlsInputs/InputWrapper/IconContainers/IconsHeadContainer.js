import styled from "styled-components";
import IconsContainer from "./IconsContainer";

const IconsHeadContainer = styled(IconsContainer)`
  height: 60px;
  padding-bottom: 8px;
  border-bottom: ${props => (props.open ? "2px solid var(--trim)" : "none")};
`;

export default IconsHeadContainer;
