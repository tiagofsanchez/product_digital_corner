import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const containerStyles = {
  margin: `20px`,
  display: `flex`,
};

const Footer = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="caption">Made with ❤️ by Tiago</Typography>
    </Box>
  );
};

export default Footer;
