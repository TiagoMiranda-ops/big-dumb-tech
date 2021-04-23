import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { details, text, featured, projectImage, cancel } from '../styles/project-details.module.css'
import { graphql, Link } from 'gatsby'

const ProjectDetails = ({ data }) => {

  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <Link className={cancel} to="/projects"><span>x</span></Link>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage className={projectImage} image={getImage(featuredImg)} />
        </div>
        <div className={text} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <hr />
    </Layout>
  )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ProjectDetails