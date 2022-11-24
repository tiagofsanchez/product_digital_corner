import * as React from "react";
import { Box, Chip } from "@mui/material";

const ArticleCardResource = ({ resourceType, resourceAccess }) => {
  return (
    <Box
      sx={{
        display: `flex`,
        marginBott: 1,
        gridGap: `10px`,
        alignItems: `center`,
      }}
    >
      <Chip label={resourceType} />
      <Chip label={resourceAccess} variant="outlined" />
    </Box>
  );
};

export default ArticleCardResource;
