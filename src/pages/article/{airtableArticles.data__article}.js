import { Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";

const BlogPost = (props) => {
  console.log(props);
  return <Typography variant="h1">Something here</Typography>;
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
