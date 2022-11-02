import { Box, Chip, Typography } from "@mui/material";
import * as React from "react";

const ArticleCardWriters = ({ resourceAccess, resourceType, writerArray }) => {
  return (
    <Box
      sx={{
        display: `flex`,
        marginBott: 1,
        gridGap: `5px`,
        alignItems: `center`,
      }}
    >
      <Chip label={resourceType} />
      <Chip label={resourceAccess} variant="outlined" />
      <Typography>by</Typography>
      {writerArray.map((writer, index) => {
        return (
          <Typography key={index}>
            {index >= 1 ? "&" : null} {writer.data.name}
          </Typography>
        );
      })}
    </Box>
  );
};

export default ArticleCardWriters;
