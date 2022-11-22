import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "gatsby";
import * as React from "react";
import ArticleCard from "./ArticleCard";

const articlesListContainer = {
  display: `flex`,
  gridGap: `10px`,
  flexDirection: `column`,
};

const ArticlesList = ({ allArticles, isMore }) => {
  return (
    <Box sx={articlesListContainer}>
      {allArticles.map((article, index) => {
        return <ArticleCard key={index} article={article.data} />;
      })}
      {isMore && (
        <Link to="/articles" style={{ textDecoration: "none" }}>
          <Button
            variant="text"
            sx={{
              color: `#d23669`,
              fontWeight: 900,
              fontSize: 16,
            }}
          >
            📜 More Articles ...
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ArticlesList;
