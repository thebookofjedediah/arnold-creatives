import React from "react";
import "./App.css";
import { Theme } from "./Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppHeader from "./components/AppHeader";
import Main from "./components/Main";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppHeader />
      <Main />
    </MuiThemeProvider>
  );
}

export default App;
