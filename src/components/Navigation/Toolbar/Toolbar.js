import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
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

  @media print {
    display: none;
  }
`;

const Toolbar = props => {
  const size = useWindowSize();
  const NavItems = size.width <= 780 ? <Hamburger /> : <NavigationItems />;

  return (
    <Header>
      <Logo />
      <nav>{NavItems}</nav>
    </Header>
  );
};

export default Toolbar;
