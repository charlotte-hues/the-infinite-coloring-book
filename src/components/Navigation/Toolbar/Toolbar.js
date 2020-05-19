import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
// import NavigationItems from "../NavigationItems/NavigationItems";

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

const toolbar = props => (
  <Header>
    <Logo />
    {/* <nav>
      <NavigationItems />
    </nav> */}
  </Header>
);

export default toolbar;
