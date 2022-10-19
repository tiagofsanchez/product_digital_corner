import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1">{article.article}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
