import React from "react";
import styled from "styled-components";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawerContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--orange);
  opacity: ${props => (props.open ? 0.9 : 0)};
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100vw)")};
  transition: opacity 0.3s ease;
  z-index: 90;
`;

const SideDrawer = props => {
  return (
    <SideDrawerContainer open={props.open} onClick={props.onClick}>
      <NavigationItems isAuth={props.isAuth} SideDrawerOpen={props.open} />
    </SideDrawerContainer>
  );
};

export default SideDrawer;
