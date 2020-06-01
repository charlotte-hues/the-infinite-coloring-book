import React from "react";
import Layout from "./hoc/Layout/Layout";
import EditPattern from "./containers/EditPattern/EditPattern";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --surface: #F7F3EE;
    --trim: #E1DBD2;
    --black: #483E3B;
    --dark: #BCB3B1;
    --background: #F0EAE1;
    --orange: #C74F33;
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
    overflow: hidden;
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

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <EditPattern />
    </Layout>
  );
}

export default App;
