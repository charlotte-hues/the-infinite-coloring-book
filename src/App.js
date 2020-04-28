import React from "react";
import "./App.css";
import EditPattern from "./containers/EditPattern/EditPattern";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
