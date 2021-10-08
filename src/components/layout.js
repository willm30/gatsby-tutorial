import * as React from 'react'
import { Link } from 'gatsby'
import { 
  title, 
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
   return(
     <div className={container}>
      <title>{pageTitle}</title>
       <nav>
         <ul className={navLinks}>
           <li className={navLinkItem}><Link to='/' className={navLinkText}>Go Home</Link></li>
           <li className={navLinkItem}><Link to='/about' className={navLinkText}>About Me</Link></li>
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
