import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <div className="head">
        <header className="global-header">
          {isHomePage ? (
            
            <Link className="header-link-home" to="/">{parse(title)}</Link>
            
          ) : (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
          )}
        </header>
      </div>

        <div className="global-wraper">    
          <main>{children}</main>
        </div>

      <hr />    
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
