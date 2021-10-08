import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const Blog = ({data}) => {
    return (
    <Layout pageTitle='The Blog!'>
      {data.allFile.nodes.map(item => (
        <li key={item.name}>
          <h1>{item.name}</h1>
        </li>
      ))}
    </Layout>
  )
}

export const blogTitles = graphql`
query {
  allFile(filter: {extension: {eq: "mdx"}}) {
    nodes {
      name
    }
  }
}`

export default Blog