import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const containerStyles = {
  margin: `20px`,
  display: `flex`,
};

const Header = () => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h6">Digital Product Directory</Typography>
    </Box>
  );
};

export default Header;
