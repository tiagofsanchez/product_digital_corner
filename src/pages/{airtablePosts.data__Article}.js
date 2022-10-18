import { graphql } from "gatsby";
import * as React from "react";

// To Do's
// Bring data in
// just create the urls for the published

const BlogPost = (props) => {
  console.log(props);
  return <h1>Something here</h1>;
};

export const query = graphql`
  query ($id: String) {
    airtablePosts(id: { eq: $id }) {
      id
      data {
        Article
      }
    }
  }
`;

export default BlogPost;
