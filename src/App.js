import React, { useEffect, useState, Suspense } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { AnimatedRoutesWrapper } from "./components/animations/animatedRoutes/animatedRoutes";
import Layout from "./hoc/Layout/Layout";
import EditPattern from "./containers/CurrentPattern/CurrentPattern";
import Logout from "./containers/Auth/Logout/Logout";
import { createGlobalStyle } from "styled-components";
import * as actions from "./store/actions/index";
import { fbAuth } from "./configs/firebase.config";

const SavedDesigns = React.lazy(() => {
  return import("./containers/SavedDesigns/SavedDesigns");
});

const About = React.lazy(() => {
  return import("./containers/About/About");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const GlobalStyle = createGlobalStyle`
  :root {
    --surface: #F7F3EE;
    --trim: #E1DBD2;
    --black: #483E3B;
    --dark: #BCB3B1;
    --background: #F0EAE1;
    --orange: #C74F33;
    --success: #33AE9A;
    --error: #D3200F;
    --smallestFont: 0.7rem;
    --shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
    --shadowSmall: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11);

  }

  * {
    box-sizing: border-box;    
    text-decoration: none;
  }
  
  body {
    color: var(--black);
    background: var(--background);
    margin: 0;
    font-family: 'Patua One', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  ul { margin: 0;
    padding: 0;
    list-style-type: none;
    }

  button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  @media print {

    body { background: #fff;}

`;

const App = props => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState({
    ...location,
    pathname: props.redirectPath
  });
  const [previousPath, setPreviousPath] = useState(props.redirectPath);

  const {
    onSetRedirectPath,
    onSetLockMode,
    getCurrentUser,
    clearCurrentUser,
    currentUser
  } = props;
  useEffect(() => {
    if (!(location.state && location.state.modal)) {
      setPreviousLocation(location);
      setPreviousPath(location.pathname);
      onSetRedirectPath(location.pathname);
      onSetLockMode(false);
    }
  }, [location, onSetRedirectPath, onSetLockMode]);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = fbAuth.onAuthStateChanged(user => {
      if (user) {
        getCurrentUser(user);
      } else {
        clearCurrentUser();
      }
      return () => unsubscribeFromAuth();
    });
  }, [getCurrentUser, clearCurrentUser, currentUser]);

  let routes = (
    <AnimatedRoutesWrapper location={previousLocation}>
      <Route path="/logout" component={Logout} />
      <Route exact path="/about" component={About} />
      <Route exact path="/myDesigns" component={SavedDesigns} />
      <Route path="/login" component={Auth} />
      <Route path="/create" component={EditPattern} />
      <Redirect to="/create" />
    </AnimatedRoutesWrapper>
  );

  return (
    <Layout>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
        <Route path={`${previousPath}/login`} component={Auth} />
      </Suspense>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token !== null,
    expirationTime: state.auth.expirationTime,
    userId: state.auth.userId,
    redirectPath: state.redirect.authRedirectPath,
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: path => dispatch(actions.setAuthRedirect(path)),
    onSetLockMode: lockMode => dispatch(actions.setLockMode(lockMode)),
    clearCurrentUser: () => dispatch(actions.clearCurrentUser()),
    getCurrentUser: user => dispatch(actions.getCurrentUser(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
