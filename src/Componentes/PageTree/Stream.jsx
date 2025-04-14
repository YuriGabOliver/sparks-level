import './Stream.css'
import { Link } from 'react-router-dom'

export default function Stream() {
    return (
        <main className="stream-main">
            <div className="main-text-top">
                <h1>Quer se tornar um <b><span className="stream-span">STREAMER</span></b>, mas não sabe por onde começar?</h1>
                <h2>Fique tranquilo(a), o <b><span className="stream-span">SPARKS LEVEL</span></b> vai te guiar nessa jornada para que você se torne uma refêrencia no mundo dos games</h2>
            </div>

            <section className="info-stream">
                <div className="main-text">
                    <h2>Se tornar um streamer de jogos é o sonho de muitos apaixonados por videogames. Com dedicação, estratégia e consistência, é possível transformar esse hobby em uma carreira lucrativa. Veja o passo a passo para começar e como monetizar sua transmissão ao vivo.</h2>
                </div>
                <div className="info-steps">
                    <div className="step">
                        <h2>Passo 1: Escolha a Plataforma Certa</h2>
                        <p>As principais plataformas de streaming incluem Twitch, YouTube e Kick. Cada uma tem seu próprio público e sistema de monetização, então pesquise qual se adapta melhor ao seu estilo e objetivos.</p>
                        <div className="platform">
                            <Link to="https://www.twitch.tv/">
                                <div className="twitch"><i class="ri-twitch-fill"></i></div>
                            </Link>
                            <Link to="https://www.youtube.com/">
                                <div className="youtube"><i class="ri-youtube-fill"></i></div>
                            </Link>
                            <Link to="https://kick.com/">
                                <div className="kick"><i class="ri-kick-fill"></i></div>
                            </Link>
                        </div>
                    </div>
                    <div className="step">
                        <h2>Passo 2: Tenha um Setup de Qualidade</h2>
                        <p>Um bom PC ou console, microfone, câmera e conexão estável com a internet são essenciais para garantir uma transmissão de qualidade. Softwares como OBS Studio ou Streamlabs também ajudam a melhorar sua produção.</p>
                        <div className="software">
                            <Link to="https://obsproject.com/pt-br/download">
                                <button className="obs">OBS</button>
                            </Link>
                            <Link to="https://streamlabs.com/pt-br/?srsltid=AfmBOorIjPFVQ12xAu4LrEw22CGUmrWJ1mYBYl1N0t4Vw_OcJrtqX8Jp">
                                <button className="streamlabs">STREAMLABS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="step">
                        <h2>Passo 3: Defina Seu Conteúdo e Nicho</h2>
                        <p>Jogos competitivos, RPGs, simuladores ou até transmissões de variedade. Escolher um nicho pode ajudar a atrair um público fiel. Desenvolva um estilo próprio e mantenha uma identidade visual marcante. Caso queira ajuda para escolher algum jogo que te agrade, clique no link abaixo para ver alguns exemplos de jogos.</p>
                        <div className="software">
                            <Link to="/Categorias">
                                <button className="ctg">Clique aqui</button></Link>
                        </div>
                    </div>
                    <div className="step">
                        <h2>Passo 4: Consistência e Engajamento</h2>
                        <p>Transmitir regularmente e interagir com o público são fundamentais. Responder comentários, criar uma comunidade e ser ativo em redes sociais aumentam suas chances de crescer na plataforma escolhida.</p>
                    </div>
                    <div className="step">
                        <h2>Como Ganhar Dinheiro com Streaming</h2>
                        <ul>
                            <li><b>Programa de Parceria e Assinaturas</b> – Plataformas como Twitch e YouTube oferecem programas de parceria que permitem monetizar através de assinaturas pagas dos seguidores.</li>
                        </ul>
                        <ul>
                            <li><b>Doações e Gorjetas</b> – Viewers podem enviar doações diretamente por meio de plataformas como PayPal, Pix ou sistemas integrados das plataformas de streaming.</li>
                        </ul>
                        <ul>
                            <li><b>Publicidade e Anúncios</b> – Anúncios exibidos durante a transmissão geram receita proporcional ao número de espectadores.</li>
                        </ul>
                        <ul>
                            <li><b>Patrocínios e Parcerias</b> – Empresas podem patrocinar seu canal em troca da promoção de produtos e serviços.</li>
                        </ul>
                        <ul>
                            <li><b>Afiliados</b> – Indicar produtos e receber comissão por vendas feitas através de seus links de afiliado.</li>
                        </ul>
                        <ul>
                            <li><b>Venda de Produtos Próprios</b> – ICriar e vender itens como camisetas, adesivos ou até cursos sobre streaming.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}