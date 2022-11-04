import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import MuiMarkdown from "mui-markdown";
import ArticleCardWriters from "../../components/ArticleCardWriters";
import moment from "moment";
import SEO from "../../components/SEO";
import generateSocialImage from "../../../functions/generateSocialmage";
import LinkFloatingButton from "../../components/LinkFloatingButton";

// TODOS:
// DONE: Writer name and article type
// DONE Link to the original article
// DONE: Link UI
// ALMOST: SEO of this page
// ALMOST: OG for this page
// ALMOST: Nice Image on the OG of this page that will
// OG for each;
// OG Global
// If Video, display Video
// More Articles on the page to keep the user engaged
// Comments so that people can comment on the article on POV

// DONE OG: add writers
// DONE OG: use react helmet or not at, no need

// OG: reconstruct a function where I simplify things



const titleStyles = {
  fontSize: `50px`,
  fontWeight: 400,
  marginBottom: `15px`,
};

const myArticleStyles = {
  backgroundColor: `#FFF1C9`,
  padding: `30px 30px 60px 30px`,
  borderRadius: `10px`,
};

const myNotesStyle = {
  maxWidth: `900px`,
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
    <>
      <Box sx={myArticleStyles}>
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
            display: `grid`,
            gridGap: `15px`,
          }}
        >
          <ArticleCardWriters
            writerArray={writerArray}
            resourceAccess={resourceAccess}
            resourceType={resourceType}
          />
          
        </Box>
      </Box>
      <LinkFloatingButton url={url} />
      {myNotes ? (
        <Box sx={myNotesStyle}>
          <MuiMarkdown>{myNotes}</MuiMarkdown>
        </Box>
      ) : (
        <Typography sx={myNotesStyle}>
          No notes, yet ... but I definitely recommend this article! Just check
          the link below.
        </Typography>
      )}
      
    </>
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
    cloudName: "tiagofsanchez",
    imagePublicID: "productCorner/product_corner_og",
    titleFont: "futura",
    taglineFont: "futura",
    textColor: "232129",
  });
  return <SEO />;
};
