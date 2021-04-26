import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import { header, btn, jpeg } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Portfólio</h2>
          <h3>Tiago Miranda</h3>
          <p>Full Stack - mas sobretudo back-end.</p>
          <Link className={btn} to="/projects"><span>projects.Enter ↩</span></Link>
        </div>
        <div>
          <StaticImage className={jpeg} src="../images/galaxy-animation/space.jpg" alt="Space" height={1100} width={1100} />
          {/*<StaticImage className={donkeyFace} src="../images/galaxy-animation/donkey-face.png" alt="Donkey-Face" placeholder="blurred" height={150} width={150}/>
          <StaticImage className={js} src="../images/galaxy-animation/js.png" alt="JavaScript" placeholder="blurred" />
          <StaticImage className={css} src="../images/galaxy-animation/css.jpg" alt="CSS" placeholder="blurred" />
          <StaticImage className={html} src="../images/galaxy-animation/html.png" alt="HTML" placeholder="blurred" />
          <StaticImage className={php} src="../images/galaxy-animation/php.png" alt="PHP" placeholder="blurred" />
          <StaticImage className={laravel} src="../images/galaxy-animation/laravel.png" alt="Laravel" placeholder="blurred" />
          <StaticImage className={node} src="../images/galaxy-animation/node.png" alt="Node" placeholder="blurred" />¨*/}
        </div>
        <p></p>
      </section>
    </Layout>
  )

}

export default Home
