import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
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
    h3: {
      fontSize: `35px`,
    },
  },
});

export default theme;
