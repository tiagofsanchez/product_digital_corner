import * as React from "react";
import { graphql } from "gatsby";
import Box from "@mui/system/Box";
import ArticlesList from "../../components/ArticlesList";
import SEO from "../../components/SEO";

const ArticlesPage = (props) => {
  const allArticles = props.data.allAirtableArticles.nodes;
  return (
    <>
      <ArticlesList allArticles={allArticles} />
    </>
  );
};

export const query = graphql`
  query {
    allAirtableArticles(sort: { order: DESC, fields: data___createdAt }) {
      nodes {
        data {
          article
          myNotes
          resourceType
          resourceAccess
          tag
          createdAt(fromNow: false)
          writer {
            data {
              name
            }
          }
        }
      }
    }
  }
`;

export default ArticlesPage;

export const Head = ({ location, data, params, pageContext }) => {
  console.log(location, data, params, pageContext);
  return <SEO />;
};
