import Container from "@mui/material/Container";
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
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
