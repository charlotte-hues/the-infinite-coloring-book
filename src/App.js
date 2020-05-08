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
    --shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  }

  * {
    box-sizing: border-box;    
    text-decoration: none;
  }

  ul { margin: 0;
     padding: 0;
     list-style-type: none;
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
