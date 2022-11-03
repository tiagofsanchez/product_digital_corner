import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import { graphql } from "gatsby";
import MuiMarkdown from "mui-markdown";
import ArticleCardWriters from "../../components/ArticleCardWriters";
import LinkIcon from "@mui/icons-material/Link";
import moment from "moment";
import SEO from "../../components/SEO";
import generateSocialImage from "../../../functions/generateSocialmage";

// TODOS:
// DONE: Writer name and article type
// DONE Link to the original article
// DONE: Link UI
// ALMOST: SEO of this page
// ALMOST: OG for this page
// ALMOST: Nice Image on the OG of this page that will
// If Video, display Video
// More Articles on the page to keep the user engaged
// Comments so that people can comment on the article on POV

// DONE OG: add writers
// OG: use react helmet or not at
// OG: reconstruct a function where I simplify things

const articleContainerStyles = {
  display: `grid`,
  gridGap: `25px`,
};

const titleStyles = {
  textTransform: `uppercase`,
  fontSize: `50px`,
  fontWeight: 400,
  marginBottom: `5px`,
};

const myNotesStyles = {
  borderRadius: `8px`,
  backgroundColor: `#FFF1C9`,
  padding: `20px`,
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

export const Head = ({ data }) => {
  const { article, writer } = data?.airtableArticles?.data;
  const socialImage = generateSocialImage({
    title: article?.replace(/[^\w\s]/gi, ""),
    author: writer[0].data.name,
    cloudName: "tiagofsanchez",
    imagePublicID: "productCorner/product_corner_og",
    titleFont: "futura",
    taglineFont: "futura",
    textColor: "232129",
  });
  console.log(socialImage);
  return <SEO />;
};
