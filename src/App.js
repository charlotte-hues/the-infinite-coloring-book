import React from "react";
import EditPattern from "./containers/EditPattern/EditPattern";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f5f5f5;
    --green: #2F544E;
    --black: #050404;
    --background: #E2D7C5;
    --orange: #C74F33;
    --red: #BE1808;
  }

  * {
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }
  
  body {
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
