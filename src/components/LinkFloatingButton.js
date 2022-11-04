import * as React from "react";
import LinkIcon from "@mui/icons-material/Link";
import Fab from "@mui/material/Fab";

const fabStyles = {
  margin: 0,
  top: -28,
  right: "auto",
  bottom: "auto",
  left: 30,
  position: "relative",
  backgroundColor: `#FFF1C9`,
  "&:hover": { backgroundColor: `#FFDF87` },
  border: `3px solid #d23669`,
};

const LinkFloatingButton = ({ url }) => {
  return (
    <Fab
      size="large"
      aria-label="Link"
      href={url}
      target="_blank"
      sx={fabStyles}
    >
      <LinkIcon />
    </Fab>
  );
};

export default LinkFloatingButton;
