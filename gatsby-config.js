module.exports = {
  siteMetadata: {
    title: `Stevie's Details`,
    siteUrl: `https://steviesdetails.com`,
    description: `Get like-new vehicle details from Stevie in Orange County, California`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Stevie's Details`,
      short_name: `Stevie`,
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#000000`,
      display: `standalone`,
      icon: "src/images/smallLogo.png"
    },
  },
]
};