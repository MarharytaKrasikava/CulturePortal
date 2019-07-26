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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `blog`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
