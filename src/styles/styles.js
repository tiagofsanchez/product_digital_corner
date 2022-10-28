import GlobalStyles from "@mui/material/GlobalStyles";
import * as React from "react";

// variable to be passed to the styles prop to make the overall style of the app

const styles = {
  body: {
    backgroundColor: `#f7f3e8`,
  },
  ul: {
    fontFamily: ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
    li: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: "0.9285714285714286rem",
    },
  },
};

const Styles = () => {
  return <GlobalStyles styles={styles} />;
};

export default Styles;
