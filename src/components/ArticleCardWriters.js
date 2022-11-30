import { Box, Typography } from "@mui/material";
import * as React from "react";

const ArticleCardWriters = ({ writerArray }) => {
  return (
    <Box
      sx={{
        display: `inline-flex`,
        alignItems: `center`,
        marginTop: `10px`,
        flexWrap: `wrap`,
        backgroundColor: `#FFDF87`,
        padding: `7px 10px`,
        borderRadius: `18px`,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: `bold` }}>
        Article by:&nbsp;
      </Typography>
      {writerArray.map((writer, index) => {
        return (
          <Typography key={index} variant="body2">
            {index >= 1 ? "& " : null}
            {writer.data.name}&nbsp;
          </Typography>
        );
      })}
    </Box>
  );
};

export default ArticleCardWriters;
