module.exports = {
  siteMetadata: {
    title: 'Service4Bernie',
    description: 'As members of the food service industry, we endorse Bernie Sanders for President. His platform attempts to address the precarity faced by service workers, and we see him as an ally in our struggle for stable, dignified lives.',
  },
  pathPrefix: '/service4bernie',
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
        name: 'Service4Bernie',
        short_name: 'Service4Bernie',
        start_url: '/',
        background_color: 'rgb(244,35,18)',
        theme_color: 'rgb(244,35,18)',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
