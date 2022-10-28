import { Box, Divider, Fab, Typography } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";
import MuiMarkdown from "mui-markdown";
import ArticleCardWriters from "../../components/ArticleCardWriters";
import LinkIcon from "@mui/icons-material/Link";
import moment from "moment";
import SEO from "../../components/SEO";

// TODOS:
// DONE: Writer name and article type
// DONE Link to the original article
// DONE: Lik UI
// SEO of this page
// OG for this page
// Nice Image on the OG of this page that will
// If Video, display Video
// More Articles on the page to keep the user engaged
// Comments so that people can comment on the article on POV

const articleContainerStyles = {
  margin: `20px`,
  maxWidth: `900px`,
  display: `grid`,
  gridGap: `25px`,
};

const titleStyles = {
  textTransform: `uppercase`,
  fontSize: `50px`,
  fontWeight: 400,
  marginBottom: `5px`,
};

const myNotesStyles = {};

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
          sx={{ fontSize: 20, fontWeight: 500 }}
          color="text.secondary"
        >
          {moment(date).format("MMM Do YYYY")}
        </Typography>
        <Typography variant="h1" sx={titleStyles}>
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
            color="default"
          >
            <LinkIcon />
          </Fab>
        </Box>
      </Box>
      <Divider variant="fullWidth" sx={{ borderColor: `#d23669` }} />
      {myNotes && (
        <Box sx={myNotesStyles}>
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

export const Head = ({ location, data, params, pageContext }) => {
  console.log(location, data, params, pageContext);
  return <SEO />;
};
