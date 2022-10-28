import { Box, Typography } from "@mui/material";
import * as React from "react";

const heroContainerStyles = {
  margin: `20px`,
  maxWidth: `900px`,
};

const Hero = () => {
  return (
    <Box sx={heroContainerStyles}>
      <Typography variant="h3" component="h1" gutterBottom>
        A collection of articles about Product Management
      </Typography>
      <Typography variant="h5" color="grey.600">
        I have been aggregating the best articles and sources of information
        about product management for while. Now I am sharing that with you,
        together with some of my personal notes.
      </Typography>
    </Box>
  );
};

export default Hero;
