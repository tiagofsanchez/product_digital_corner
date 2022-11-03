import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "gatsby";

const containerStyles = {
  marginBottom: `60px`,
  marginTop: `40px`,
  display: `flex`,
};

const Header = () => {
  return (
    <Box sx={containerStyles}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: `#d23669`,
            fontWeight: 900,
            textTransform: `uppercase`,
          }}
        >
          Product Corner
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
