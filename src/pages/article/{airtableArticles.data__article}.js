import { Box, Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";
import MuiMarkdown from "mui-markdown";
import ArticleCardWriters from "../../components/ArticleCardWriters";
import LinkIcon from "@mui/icons-material/Link";

// TODOS:
// DONE: Writer name and article type
// Link to the original article
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
  borderRadius: `10px`,
  p: 3,
};

const BlogPost = ({ data }) => {
  const title = data.airtableArticles.data.article;
  const myNotes = data.airtableArticles.data.myNotes;
  const writerArray = data.airtableArticles.data.writer;
  const resourceType = data.airtableArticles.data.resourceType;
  const resourceAccess = data.airtableArticles.data.resourceAccess;
  const url = data.airtableArticles.data.url;

  return (
    <Box sx={articleContainerStyles}>
      <Box>
        <Typography variant="h1" sx={{ marginBottom: `5px` }}>
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
          <a href={url} target="_blank">
            <LinkIcon />
          </a>
        </Box>
      </Box>
      {myNotes && (
        <Box sx={myNotesStyles} bgcolor="grey.200">
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
