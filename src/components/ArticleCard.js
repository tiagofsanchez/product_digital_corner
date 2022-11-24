import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "gatsby";
import slugify from "@sindresorhus/slugify";
import * as React from "react";
import moment from "moment";
import ArticleCardWriters from "./ArticleCardWriters";
import ArticleCardResource from "./ArticleCardResource";

const ArticleCard = ({ article }) => {
  const title = article.article;
  const date = article.createdAt;
  const writerArray = article.writer;
  const resourceType = article.resourceType;
  const resourceAccess = article.resourceAccess;

  return (
    <Link to={`/articles/${slugify(title)}`} style={{ textDecoration: "none" }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: `#FFF1C9`,
          borderRadius: `10px`,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              variant="overline"
              gutterBottom
              sx={{ fontWeight: 900 }}
              color="text.secondary"
            >
              {moment(date).format("MMM Do YYYY")}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <ArticleCardResource
              resourceAccess={resourceAccess}
              resourceType={resourceType}
            />
            <ArticleCardWriters writerArray={writerArray} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ArticleCard;
