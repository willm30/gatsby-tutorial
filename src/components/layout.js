import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  title, 
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'


const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

   return(
     <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>     
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to='/' className={navLinkText}>Go Home</Link></li>
            <li className={navLinkItem}><Link to='/about' className={navLinkText}>About Me</Link></li>
            <li className={navLinkItem}><Link to='/blog' className={navLinkText}>Blog</Link></li>
          </ul>
        </nav>
        <main>
          <h1 className={title}>{pageTitle}</h1>
          {children}
        </main>
    </div>
  )
}

export default Layout
