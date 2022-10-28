import * as React from "react";
import { graphql } from "gatsby";
import Box from "@mui/system/Box";
import ArticlesList from "../../components/ArticlesList";
import SEO from "../../components/SEO";

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `900px`,
};

const ArticlesPage = (props) => {
  const allArticles = props.data.allAirtableArticles.nodes;
  return (
    <>
      <Box sx={articleContainerStyles}>
        <ArticlesList allArticles={allArticles} />
      </Box>
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
