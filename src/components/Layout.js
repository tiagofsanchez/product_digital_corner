import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import theme from "../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
