import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: red.A400,
    },
  },
  typography: {
    fontFamily: ["Futura", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    fontSize: 16,
    body: {
      fontSize: `20rem`,
    },
    h2: {
      fontSize: `45px`,
    },
  },
});

export default theme;
