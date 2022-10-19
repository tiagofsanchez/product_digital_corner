import { graphql } from "gatsby";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ArticlesList from "../components/ArticlesList";

// TODO's:
// DONE: Layout for HomePage that will serve the other pages
// DONE: Material Ui: to get the components that I want there
// UI: Hero
// DONE UI: ArticleCard
// DONE: UI: ArticleList
// DONE: UI: Footer

const HomePage = (props) => {
  const allArticles = props.data.allAirtableArticles.nodes;
  return (
    <>
      <Typography variant="h1">Something here</Typography>
      <ArticlesList allArticles={allArticles} />
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
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
