import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

const Main = styled.main`
  height: 93vh;
`;

const Layout = props => {
  const size = useWindowSize();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const sideDrawerOpenHandler = () => setSideDrawerOpen(!sideDrawerOpen);

  return (
    <React.Fragment>
      <ToolBar
        mobile={size.width < 780}
        onClick={sideDrawerOpenHandler}
        sideDrawerOpen={sideDrawerOpen}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer open={sideDrawerOpen} onClick={sideDrawerOpenHandler} />
      <Main>{props.children}</Main>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
