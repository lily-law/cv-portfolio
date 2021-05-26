const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `LeafLily`,
        description: `Lily Law's CV and Portfolio`,
        author: `@lily-law`,
    },
    plugins: [
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         trackingId: 'UA-177632665-1',
        //         anonymize: true,
        //         respectDNT: true,
        //     },
        // },
        {
            resolve: `gatsby-plugin-styled-jsx`,
            options: {
                optimizeForSpeed: true,
                sourceMaps: false,
                vendorPrefixes: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `LeafLily - Lily Law's CV and Portfolio`,
                short_name: `LeafLily`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#99CCFF`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
