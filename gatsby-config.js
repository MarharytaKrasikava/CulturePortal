/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `gatsby-example-using-markdown-pages`,
    description: `Start your new blog using markdown files`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `src/blog`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
