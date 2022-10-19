import { graphql } from "gatsby";
import * as React from "react";

// To Do's
// DONE: Bring data in
// DONE: just create the urls for the published

const BlogPost = (props) => {
  console.log(props);
  return <h1>Something here</h1>;
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
