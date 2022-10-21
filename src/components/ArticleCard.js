import {
  Chip,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "gatsby";
import slugify from "@sindresorhus/slugify";
import * as React from "react";
import moment from "moment";

// TODO:
// Link to Article Page
// FormatLink
// deconstruct the

const ArticleCard = ({ article }) => {
  const title = article.article;
  const date = article.createdAt;
  const writerArray = article.writer;
  const resourceType = article.resourceType;
  const resourceAccess = article.resourceAccess;
  const myNotes = article.myNotes;

  return (
    <Link to={`/article/${slugify(title)}`} style={{ textDecoration: "none" }}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ fontWeight: 900 }}
              color="text.secondary"
            >
              {moment(date).format("MMM Do YYYY")}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <Box sx={{ display: `flex`, marginBott: 1, gridGap: `10px` }}>
              <Chip label={resourceType} />
              <Chip label={resourceAccess} variant="outlined" />
              <Typography>by</Typography>
              {writerArray.map((writer, index) => (
                <Typography key={index}>{writer.data.name}</Typography>
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ArticleCard;
