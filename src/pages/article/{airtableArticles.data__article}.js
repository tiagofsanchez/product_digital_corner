import { Box, Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";

import MuiMarkdown from "mui-markdown";

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `1200px`,
};

const BlogPost = ({ data }) => {
  const title = data.airtableArticles.data.article;
  const myNotes = data.airtableArticles.data.myNotes;
  console.log(myNotes);
  return (
    <Box sx={articleContainerStyles}>
      <Typography variant="h2">{title}</Typography>
      {myNotes && <MuiMarkdown>{myNotes}</MuiMarkdown>}
    </Box>
  );
};

export const query = graphql`
  query ($id: String) {
    airtableArticles(id: { eq: $id }) {
      id
      data {
        article
        myNotes
      }
    }
  }
`;

export default BlogPost;
