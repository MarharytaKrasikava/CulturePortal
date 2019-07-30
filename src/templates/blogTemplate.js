import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div>
        <img width="900" height="588" src={frontmatter.image} alt="Yuri-Khashchavacki" />
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
          image
        }
      }
    }`

    
    /* file(relativePath: { eq: "assets/yury-hashchavatsky.jpg" }) {
      childImageSharp {
        fixed(width: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    } */