import * as React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ allArticles }) => {
  return allArticles.map((article) => <ArticleCard article={article.data} />);
};

export default ArticlesList;
