module.exports = {
  siteMetadata: {
    title: 'SERVICE4BERNIE',
    description: 'Service Workers for Bernie.', // TODO
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout.jsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SERVICE4BERNIE',
        short_name: 'SW4Bernie',
        start_url: '/',
        background_color: 'red',
        theme_color: 'red',
        display: 'minimal-ui',
        icon: 'src/images/sanders-sitin.jpg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
