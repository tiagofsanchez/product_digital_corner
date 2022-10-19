import { graphql, Link } from "gatsby";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";
import { Card, CardContent } from "@mui/material";

// TODO's:
// Layout for HomePage that will serve the other pages
// DONE: Material Ui: to get the components that I want there
// UI: Hero
// UI: ArticleCard
// UI: ArticleList
// UI: Footer

const HomePage = (props) => {
  return (
    <Layout>
      <Typography variant="h1">Something here</Typography>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            color="text.secondary"
          >
            Gatsby example
          </Typography>
          <Link to="/" color="secondary">
            Go to the same page
          </Link>
        </Box>
      </Container>
      <Card>
        <CardContent>
          <pre>{JSON.stringify(props.data, null, 2)}</pre>
        </CardContent>
      </Card>
    </Layout>
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
