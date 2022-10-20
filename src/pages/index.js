import { graphql } from "gatsby";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ArticlesList from "../components/ArticlesList";
import Box from "@mui/material/Box";

// TODO's:
// DONE: Layout for HomePage that will serve the other pages
// DONE: Material Ui: to get the components that I want there
// UI: Hero
// DONE UI: ArticleCard
// DONE: UI: ArticleList
// DONE: UI: Footer

// MORE TODO's
// Query the info that I will want to have in the ArticleCard
// HomePage to only show a couple of listings
// AllArticles Page

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `1200px`,
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
    allAirtableArticles {
      nodes {
        data {
          article
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

export const Head = () => <title>Home Page</title>;
