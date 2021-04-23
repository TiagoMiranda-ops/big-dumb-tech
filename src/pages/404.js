import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { donkey, tumbleweed, notFoundWrapper, header, tumbleweedTwo } from '../styles/404.module.css'

const NotFound = () => {
    return (
        <Layout>
            <section className={header}>
                <div className={notFoundWrapper}>
                    <h1>404</h1>
                    <h2>ERRO</h2>
                    <hr />
                    <h3>E a curiosidade matou o gato...</h3>
                </div>
                <div>
                    <StaticImage className={donkey} src="../images/donkey-logo.png" alt="Logo" style={{ maxWidth: '10%' }} placeholder="blurred" />
                    <StaticImage className={tumbleweed} src="../images/tumbleweed-404.png" alt="Tumbleweed" style={{ maxWidth: '5%' }} placeholder="blurred" />
                    <StaticImage className={tumbleweedTwo} src="../images/tumbleweed-404.png" alt="Tumbleweed" style={{ maxWidth: '5%' }} placeholder="blurred" />
                </div>
            </section>
        </Layout>
    );
}

export default NotFound