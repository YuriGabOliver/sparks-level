import './Genres.css'
import Fps from './assets/fps.jpg'
import Rpg from './assets/rpg.jpg'
import Luta from './assets/luta.jpg'
import Esporte from './assets/esporte.jpg'
import Corrida from './assets/corrida.jpg'
import Terror from './assets/terror.jpg'
import { Link } from 'react-router-dom'

export default function Genres() {
    return (

        <article className="genres-article">
            <div className="text-top">
                <h2>Categorias</h2>
            </div>
            <div className="info-category">
                <div className="info-cat">
                    <h2>Oque são categorias de jogos?</h2>
                    <p>São classificações que agrupam os games com base em suas mecânicas, jogabilidade e objetivos. Essas categorias ajudam a definir o estilo de um jogo, tornando mais fácil para os jogadores encontrarem títulos do seu interesse.</p>
                </div>
                <div className="info-paragraph">
                    <p>Os jogos podem ser classificados de diversas formas, como FPS, RPG, LUTA, ESPORTE, CORRIDA e TERROR e entre outros. Abaixo tem uma breve explicação sobre algumas categorias.</p>
                </div>
            </div>

            <div className="itens-categoria">
                <section>
                    <div className="categoria-image">
                        <img src={Fps} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span>FPS</span>?</h2>
                        <p>São jogos de tiro em primeira pessoa, focados em reflexos rápidos, mira precisa e ação intensa. Podem variar entre campanhas solo imersivas e modos multiplayer competitivos, como battle royale e táticos.</p>
                    </div>
                </section>


                <section>
                    <div className="categoria-image">
                        <img src={Rpg} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span className='rpg'>RPG</span>?</h2>
                        <p>São jogos que focam em narrativa, progressão de personagens e escolhas que impactam a história. Podem ser turn-based, em tempo real ou de mundo aberto, com sistemas de níveis, habilidades e customização
                        </p>
                    </div>
                </section>


                <section>
                    <div className="categoria-image">
                        <img src={Luta} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span className='luta'>LUTA</span>?</h2>
                        <p>São jogos focados em combates diretos entre personagens, exigindo reflexos rápidos, estratégia e domínio de combos. Podem ser em 2D ou 3D, com mecânicas como barras de energia, especiais e contra-ataques. </p>
                    </div>
                </section>


                <section>
                    <div className="categoria-image">
                        <img src={Esporte} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span className='esporte'>ESPORTE</span>?</h2>
                        <p>São jogos que simulam modalidades reais como futebol, basquete e corrida, trazendo mecânicas autênticas e competitividade. Podem ser realistas, como FIFA e NBA 2K, ou mais arcade, como Rocket League.</p>
                    </div>
                </section>


                <section>
                    <div className="categoria-image">
                        <img src={Corrida} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span className='corrida'>CORRIDA</span>?</h2>
                        <p>São jogos que focam em velocidade e controle de veículos, variando entre simulações realistas e experiências arcade. Podem incluir carros, motos e até karts, com modos como circuitos, rachas e mundo aberto.</p>
                    </div>
                </section>

                <section>
                    <div className="categoria-image">
                        <img src={Terror} className='line-bottom' />
                    </div>
                    <div className="info">
                        <h2>Oque são jogos de <span className='terror'>TERROR</span>?</h2>
                        <p>São jogos que focam em criar tensão e medo, usando atmosfera sombria, sustos e narrativas envolventes. Podem ser de sobrevivência, psicológicos ou de ação, com recursos limitados e inimigos aterrorizantes.</p>
                    </div>
                </section>
            </div>
            <div className="link">
                <p><Link to="/Categorias">CLIQUE AQUI</Link> e veja alguns exemplos de jogos de cada categoria citada acima.</p>
            </div>
        </article>
    )
}