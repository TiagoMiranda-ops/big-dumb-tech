import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

 const Navbar = () => {

  const data = useStaticQuery(graphql`
    query SiteInfoTitle {
        site {
          siteMetadata {
            title
          }
        }
      }`)

  const { title } = data.site.siteMetadata

  return (
    <nav>

      <h1> {title} <StaticImage src="../images/donkey-logo.png" alt="Logo" style={{ maxWidth: '10%' }} placeholder="blurred" /></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projectos</Link>
        <Link className="peel" to="/404" title="NÃO!!">Descola-me!</Link>
      </div>
    </nav>
  )
}

export default Navbar
