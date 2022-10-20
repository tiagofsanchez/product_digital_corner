import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const containerStyles = {
  margin: `20px`,
  display: `flex`,
};

const Footer = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6">Made with ❤️ by Tiago</Typography>
    </Box>
  );
};

export default Footer;
