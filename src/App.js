import React from "react";
import "./App.css";
import { Theme } from "./Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppHeader />
    </MuiThemeProvider>
  );
}

export default App;
