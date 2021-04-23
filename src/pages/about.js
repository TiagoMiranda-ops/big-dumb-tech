import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { download, git, about, separator } from "../styles/about.module.css"


const About = ({ data }) => {

    const { publicURL } = data.file

    return (
        <Layout>
            <div className={about}>
                <h2>Sobre a empresa</h2>
                <hr className={separator} />
                <h3>Aviso legal</h3>
                <p><i>Este website é apenas uma derivação sarcástica do mundo das tecnologias de informação. O seu intento passa por veicular o portfólio de um aspirante a programador de um modo mais ligeiro e auto-depreciativo.</i></p>
                <p><i>Que ninguém se sinta ofendido.</i></p>
                <hr className={separator} />
            </div>
            <div className={about}>
                <h3>História</h3>
                <p>O embrião desta empresa revolucionária teve a sua origem no curso de Full Stack Developer que o seu fundador realizou na escola Flag Professional do Porto, no malfadado ano pandémico de 2020-21. As bases foram sendo gradualmente lançadas, em linha com os três eixos principais e cronológicos do curso, a saber:</p>
                <p><strong>Gestão de projectos ▶</strong> Metodologias Agile, Scrum.</p>
                <p><strong>Front-end ▶</strong> HTML + HTML5, CSS, Javascript, Responsive Web Design, jQuery, Angular v10 c/ Typescript.</p>
                <p><strong>Back-end ▶</strong> GIT, Estruturação de dados, MySQL, PHP, Laravel v8, REST APIs, MongoDB, NodeJS + ExpressJS.</p>
                <p>Actividades extracurriculares, como Docker, NativeScript e WebSockets foram também trazidas à colação, mas a cabeça do seu fundador já explodia - literalmente, entendam como quiserem - com outras ideias: nasce, assim, a <strong>big dumb tech.</strong> (com ponto final no fim, porque as modas são para serem seguidas, não é?).</p>
                <p>Ancorando-se em fundamentos inovadores e em contracorrente aos tempos... correntes, a missão desta empresa cinge-se única e exclusivamente a enfrentar a famigerada <i>big tech</i> cara a cara. Como tal, criou vários produtos e serviços que patenteou de <strong>dumb</strong>, não só encontrando - como desbravando - um legítimo nicho de mercado para servir aqueles consumidores encurralados nas chamadas <i>smart cities, smart houses, smart</i> tudo.</p>
                <p>O avanço infernal das <i>big tech</i> pretende abarcar todo o mundo dos seres humanos, subordinando-o à tecnologia e à internet. A inteligência algorrítmica sobrepõe-se à humana, mas não temam: propomos os valores de uma vida limitada e decididamente desinteligente. P.S.: Estes valores repercutiram-se no desenvolvimento técnico e "responsivo" da empresa, para quem estiver atento - o departamento de front-end anda foragido.</p>
                <p>Para consultarem a sublime lógica que sustenta o nosso <i>core business</i> - vulgo os nossos projectos -, primam o botão abaixo (lamento o gato contrafeito). A indústria precisava de um contrapeso dentro da própria indústria: abram alas, pois, ele acabou de chegar.</p>
                <a className={git} href="https://github.com/TiagoMiranda-ops"><span>go.GitHub 🐱</span></a>
                <hr className={separator} />
            </div>
             <div className={about}>
                <h3>O fundador</h3>
                <p> O fundador é o único funcionário da <strong>big dumb tech.</strong>, porquanto a empresa acabou de se estabelecer e somente vale pela sua teórica ideia de negócio. Assim, ele age simultaneamente como CEO, CFO, CTO, CIO, CIA, FBI e qualquer outra sigla de 3 caracteres que possam imaginar.</p>
                <p>Antes de qualquer recrutamento ou mais desenvolvimento de produto, procuramos investidores reputados, com o fito de, um dia, nos cotarmos em bolsa e arrecadarmos milhões (para todos os envolvidos).</p>
                <p>O seu percurso pode ser consultado abaixo através do descarregamento do respectivo currículo, embora este seja o mesmo que vos trouxe até aqui. Um belo exemplo, em acção, dos nossos conceitos tecnológicos.</p>
                <a className={download} href={publicURL} download><span>CV.download 🡻</span></a>
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyPDF {
    file(extension: {eq: "pdf"}) {
      name
      publicURL
    }
  }
`
export default About