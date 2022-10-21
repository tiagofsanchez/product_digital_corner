import { Box, Fab, Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";
import MuiMarkdown from "mui-markdown";
import ArticleCardWriters from "../../components/ArticleCardWriters";
import LinkIcon from "@mui/icons-material/Link";
import moment from "moment";

// TODOS:
// DONE: Writer name and article type
// DONE Link to the original article
// DONE: Lik UI
// SEO of this page
// OG for this page
// Nice Image on the OG of this page that will

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `1200px`,
  display: `grid`,
  gridGap: `25px`,
};

const myNotesStyles = {
  borderRadius: `3px`,
  p: 3,
};

const BlogPost = ({ data }) => {
  const title = data.airtableArticles.data.article;
  const myNotes = data.airtableArticles.data.myNotes;
  const writerArray = data.airtableArticles.data.writer;
  const resourceType = data.airtableArticles.data.resourceType;
  const resourceAccess = data.airtableArticles.data.resourceAccess;
  const url = data.airtableArticles.data.url;
  const date = data.airtableArticles.data.createdAt;

  return (
    <Box sx={articleContainerStyles}>
      <Box>
        <Typography
          variant="overline"
          gutterBottom
          sx={{ fontSize: 20 }}
          color="text.secondary"
        >
          {moment(date).format("MMM Do YYYY")}
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: `5px` }} gutterBottom>
          {title}
        </Typography>

        <Box
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <ArticleCardWriters
            writerArray={writerArray}
            resourceAccess={resourceAccess}
            resourceType={resourceType}
          />

          <Fab
            size="small"
            aria-label="Link"
            href={url}
            target="_blank"
            color="info"
          >
            <LinkIcon />
          </Fab>
        </Box>
      </Box>
      {myNotes && (
        <Box sx={myNotesStyles} bgcolor="grey.100">
          <MuiMarkdown>{myNotes}</MuiMarkdown>
        </Box>
      )}
    </Box>
  );
};

export const query = graphql`
  query ($id: String) {
    airtableArticles(id: { eq: $id }) {
      id
      data {
        article
        myNotes
        resourceType
        resourceAccess
        url
        createdAt(fromNow: false)
        writer {
          data {
            name
          }
        }
      }
    }
  }
`;

export default BlogPost;
