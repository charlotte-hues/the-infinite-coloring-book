import React from "react";
import styled from "styled-components";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";

const Main = styled.main`
  height: 94vh;
`;

const Layout = props => {
  return (
    <React.Fragment>
      <ToolBar />
      <Main>{props.children}</Main>
    </React.Fragment>
  );
};

export default Layout;
