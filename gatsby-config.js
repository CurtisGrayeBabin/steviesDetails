module.exports = {
  siteMetadata: {
    title: `Stevie's Details`,
    siteUrl: `https://steviesdetails.com`,
    description: `Get like-new vehicle details from Stevie in Orange County, California`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};