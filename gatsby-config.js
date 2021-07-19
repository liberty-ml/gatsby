module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "liberty-ml",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "eg-rkhugQ2bCfqSlGcygVe3DBzsrcS2dU3_iXjjIU0s",
        spaceId: "ywk38adlywh4",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
  ],
};
