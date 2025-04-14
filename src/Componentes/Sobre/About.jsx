import Logosl from './assets/logosl.png'
import './About.css'

export default function About() {
    return (
        <section className="about">
            <div className="about-article">
                <div className="logo-sparks">
                    <img src={Logosl} alt="Logo Sparks" />
                </div>
                <div className="info-about">
                    <h2>O que é <span className='spark'>SparkS Level</span>?</h2>
                    <div className="paragraph">
                        <p><b>SPARKS</b> é uma plataforma digital dedicada aos apaixonados por jogos, oferecendo uma vasta gama de informações sobre diferentes gêneros. Com o objetivo se tornar a principal plataforma digital no mundo dos jogos, fornecendo conteúdo atualizado, análises detalhadas e novidades sobre os mais diversos gêneros.A ideia é conectar gamers, compartilhar conhecimento e impulsionar a paixão pelo universo dos jogos.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}