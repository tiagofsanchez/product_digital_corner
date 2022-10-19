import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Styles from "../styles/styles";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Tiago</h1>
      <Styles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
