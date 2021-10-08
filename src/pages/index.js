import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'> 
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          src='https://zoolove.com.br/wp-content/uploads/2020/02/animal-2836987_1920_Easy-Resize.com_.jpg' 
          alt='A beautiful Staffy'></StaticImage>
        <StaticImage 
          src='../images/helder.jpg' 
          alt='Helder Nunes playing for Barcelona'></StaticImage>
    </Layout>
  )
}

export default IndexPage