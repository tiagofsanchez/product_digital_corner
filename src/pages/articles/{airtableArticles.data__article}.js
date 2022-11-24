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
import ArticleCardResource from "../../components/ArticleCardResource";

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

        <ArticleCardResource
          resourceAccess={resourceAccess}
          resourceType={resourceType}
        />
        <ArticleCardWriters writerArray={writerArray} />
      </Box>
      <LinkFloatingButton url={url} />
      {myNotes ? (
        <Box sx={myNotesStyle}>
          <MuiMarkdown>{myNotes}</MuiMarkdown>
        </Box>
      ) : (
        <Typography sx={myNotesStyle}>
          No notes, yet ... but I definitely recommend this article! Just click
          the article link.
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
  const { article } = data?.airtableArticles?.data;
  const socialImage = generateSocialImage({
    title: article?.replace(/[^\w\s]/gi, ""),
    cloudName: "tiagofsanchez",
    imagePublicID: "productCorner/product_corner_og",
    titleFont: "futura",
    taglineFont: "futura",
    textColor: "232129",
  });

  return <SEO image={socialImage} />;
};
