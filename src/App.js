import React from "react";
import "./App.css";
import { Theme } from "./Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <div>hi</div>
    </MuiThemeProvider>
  );
}

export default App;
