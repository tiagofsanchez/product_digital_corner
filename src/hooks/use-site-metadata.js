import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          siteImage
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
