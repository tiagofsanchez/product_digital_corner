import * as React from "react";
import { graphql } from "gatsby";
import ArticlesList from "../components/ArticlesList";
import Box from "@mui/material/Box";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

// MORE TODO's
// HomePage: when Airtable changes, it triggers the push of the project
// DONE: AllArticles Page

const HomePage = (props) => {
  const allArticles = props.data.allAirtableArticles.nodes;
  return (
    <>
      <Box sx={{ display: `grid`, gridGap: `80px` }}>
        <Hero />
        <ArticlesList allArticles={allArticles} isMore={true} />
      </Box>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allAirtableArticles(
      sort: { order: DESC, fields: data___createdAt }
      limit: 6
    ) {
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

export const Head = () => {
  return <SEO />;
};
