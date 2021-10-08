import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Blog = ({data}) => {
    return (
    <Layout pageTitle='The Blog!'>
      {data.allMdx.nodes.map(item => (
        <article key={item.id}>
          <h1>{item.frontmatter.title}</h1>
          <p>Date posted: {item.frontmatter.date}</p>
          <MDXRenderer>{item.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  )
}

export const blogTitles = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}
`

export default Blog