import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      700: "#119620",
      500: "#2FB735",
      100: "#C5E9C4",
      200: "#A0DB9E",
      dark: "12361e",
      main: "#21412a",
      light: "#497c56",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#998643",
      dark: "5d5224",
      light: "BFB28A"
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      primaryMediumEmphasis: "rgba(0, 0, 0, 0.6)",
      secondary: "rgba(255, 255, 255, 1)",
      secondaryMediumEmphasis: "rgba(255, 255, 255, 0.6)"
    }
  },
  typography: {
    subtitle1: {}
  }
});
