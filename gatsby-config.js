require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Liberty UX Machine Learning",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: process.env.SPACE_ID
      },
    },
    "gatsby-image",
    `gatsby-plugin-image`,
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Knewave\:400',
          'Roboto\:400,700',
          'Oxygen\:400,700'
        ],
      },
    },
    "gatsby-plugin-testing"
  ],
};
