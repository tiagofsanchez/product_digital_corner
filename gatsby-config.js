require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Product Corner`,
    siteUrl: `https://www.productcorner.io`,
    description: `The best articles and sources of information about product management, together with some of my personal notes.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            tableLinks: ["writer"],
            tableView: "gatsbySource",
            separateNodeType: true,
            queryName: "Articles",
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: "writerDirectory",
            tableLinks: ["directory"],
            separateNodeType: true,
            queryName: "Writers",
          },
        ],
      },
    },
  ],
};
