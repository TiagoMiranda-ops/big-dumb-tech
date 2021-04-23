import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteInfoCopy {
        site {
          siteMetadata {
            copyright
          }
        }
      }`)

  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  )
}

export default Layout
