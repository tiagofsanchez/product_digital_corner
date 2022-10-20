import { Box, Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `1200px`,
};

const BlogPost = ({ data }) => {
  const title = data.airtableArticles.data.article;
  return (
    <Box sx={articleContainerStyles}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
};

export const query = graphql`
  query ($id: String) {
    airtableArticles(id: { eq: $id }) {
      id
      data {
        article
      }
    }
  }
`;

export default BlogPost;
