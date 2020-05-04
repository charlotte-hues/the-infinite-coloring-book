import React from "react";
import EditPattern from "./containers/EditPattern/EditPattern";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --surface: #F7F3EE;
    --trim: #E1DBD2;
    --black: #483E3B;
    --background: #F0EAE1;
    --orange: #C74F33;
  }

  * {
    box-sizing: border-box;
    list-style-type: none;
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
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <EditPattern />
    </React.Fragment>
  );
}

export default App;
