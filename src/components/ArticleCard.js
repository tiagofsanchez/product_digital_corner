import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "gatsby";
import slugify from "@sindresorhus/slugify";
import * as React from "react";

// TODO:
// Link to Article Page
// FormatLink

const ArticleCard = ({ article }) => {
  const title = article.article;

  return (
    <Link to={`/article/${slugify(title)}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
