import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <Link to="/blog/jury-chashchavacki-en/">Go to my first Markdown blog post</Link><br></br>
    <Link to="/blog/jury-chashchavacki-ru/">Go to my second Markdown blog post</Link>
  </Layout>
)

export default IndexPage