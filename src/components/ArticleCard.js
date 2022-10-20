import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

const ArticleCard = ({ article }) => {
  const title = article.article;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body1">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
