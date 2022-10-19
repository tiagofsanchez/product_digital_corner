import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Styles from "../styles/styles";
import theme from "../styles/theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
