import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const containerStyles = {
  marginTop: `80px`,
  marginBottom: `40px`,
  display: `flex`,
};

const Footer = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6">
        Made with ❤️ by{" "}
        <a
          href="https://www.tiagofsanchez.com/"
          target="_blank"
          aria-label="Go to Tiago's digital garden "
          style={{ color: `#d23669` }}
        >
          Tiago
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
