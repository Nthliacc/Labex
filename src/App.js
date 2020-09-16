import React from "react";
import { Router } from "./components/Router";
import { AppContainer } from "./pages/styled";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#ff6000"
    },
    secondary: {
      main: "#ffffff"
    },
    error: {
      main: "#ff0000"
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppContainer>
          <Router />
        </AppContainer>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
