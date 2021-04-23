import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, unit, projectThumb } from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {

    const projects = data.projects.nodes
    const { contact } = data.contact.siteMetadata
    
    return (
        
        <Layout>
            <div className={portfolio}>
                <h2>Portfólio</h2>
                <hr />
                <h3>Projectos criados</h3>
                <div className={unit}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage className={projectThumb} image={getImage(project.frontmatter.thumb)} />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Questões para <strong>{contact}</strong></p>
            </div>
        </Layout>
    )
}


export const query = graphql`
query Projects {
    projects: allMarkdownRemark (sort: {fields: frontmatter___date, order: ASC}){
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    contact: site {
        siteMetadata {
          contact
        }
      }
  }`
export default Projects