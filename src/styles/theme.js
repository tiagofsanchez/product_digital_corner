import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: ["Futura", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    body1: {
      marginTop: `10px`,
    },
    h1: {
      fontSize: `60px`,
    },
    h2: {
      fontSize: `45px`,
    },
    h3: {
      fontSize: `35px`,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
