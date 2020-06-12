import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PatternContextProvider from "./context/PatternContext/PatternContext";
import { withRouter } from "react-router";
import { AnimatedRoutesWrapper } from "./components/animations/animatedRoutes/animatedRoutes";
import Layout from "./hoc/Layout/Layout";
import EditPattern from "./containers/EditPattern/EditPattern";
import SavedDesigns from "./containers/SavedDesigns/SavedDesigns";
import About from "./containers/About/About";
import Auth from "./containers/Auth/Auth";
import { createGlobalStyle } from "styled-components";
import * as actions from "./store/actions/index";

const GlobalStyle = createGlobalStyle`
  :root {
    --surface: #F7F3EE;
    --trim: #E1DBD2;
    --black: #483E3B;
    --dark: #BCB3B1;
    --background: #F0EAE1;
    --orange: #C74F33;
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
  }

  @media print {

    body { background: #fff;}

`;

const App = props => {
  //
  const { onTryAutoSignup } = props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <AnimatedRoutesWrapper>
      <Route path="/login" exact component={Auth} />
      <Route path="/about" exact component={About} />
      <Route path="/myDesigns" exact component={SavedDesigns} />

      <Route path="/" component={EditPattern} />
      <Redirect to="/" />
    </AnimatedRoutesWrapper>
  );

  return (
    <Layout>
      <GlobalStyle />
      <PatternContextProvider>{routes}</PatternContextProvider>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
