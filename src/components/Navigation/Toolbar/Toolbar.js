import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Hamburger from "../../UI/Icons/Hamburger/Hamburger";
import NavigationItems from "../NavigationItems/NavigationItems";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  min-height: 40px;
  height: 7vh;
  background: ${props =>
    props.fillColor ? "rgba(199,79,51,0.9)" : "rgba(199,79,51,0)"};

  @media print {
    display: none;
  }
`;

const Toolbar = props => {
  const NavItems = props.mobile ? (
    <Hamburger
      onClick={props.onClick}
      fillColor={props.sideDrawerOpen ? "var(--surface)" : "var(--orange)"}
    />
  ) : (
    <NavigationItems />
  );

  useEffect(() => {
    if (!props.mobile && props.sideDrawerOpen) props.onClick();
  }, [props.mobile, props.sideDrawerOpen]);

  return (
    <Header fillColor={props.sideDrawerOpen}>
      <Logo
        fillColor={props.sideDrawerOpen ? "var(--surface)" : "var(--orange)"}
      />
      <nav>{NavItems}</nav>
    </Header>
  );
};

export default Toolbar;
