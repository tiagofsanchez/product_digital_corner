import * as React from "react";
import { graphql } from "gatsby";
import ArticlesList from "../components/ArticlesList";
import Box from "@mui/material/Box";
import SEO from "../components/SEO";

// TODO's:
// DONE: Layout for HomePage that will serve the other pages
// DONE: Material Ui: to get the components that I want there
// UI: Hero
// DONE UI: ArticleCard
// DONE: UI: ArticleList
// DONE: UI: Footer

// MORE TODO's
// DONE: Query the info that I will want to have in the ArticleCard
// HomePage to only show a couple of listings
// HomePage: when Airtable changes, it triggers the push of the project
// AllArticles Page

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `900px`,
};

const HomePage = (props) => {
  const allArticles = props.data.allAirtableArticles.nodes;
  return (
    <>
      <Box sx={articleContainerStyles}>
        <ArticlesList allArticles={allArticles} />
      </Box>
    </>
  );
};

export default HomePage;

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

export const Head = () => <SEO />;
