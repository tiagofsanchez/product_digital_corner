import Box from "@mui/material/Box";
import * as React from "react";
import ArticleCard from "./ArticleCard";

const articlesListContainer = {
  display: `flex`,
  gridGap: `10px`,
  flexDirection: `column`,
};

const ArticlesList = ({ allArticles }) => {
  return (
    <Box sx={articlesListContainer}>
      {allArticles.map((article) => {
        return <ArticleCard article={article.data} />;
      })}
    </Box>
  );
};

export default ArticlesList;
