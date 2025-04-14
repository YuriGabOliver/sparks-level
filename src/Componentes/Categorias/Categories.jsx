import './Categories.css'
import Logocs from './assets/logocs.jpg';
import Logoval from './assets/logoval.jpg';
import Logobaldur from './assets/logobaldur.jpg';
import Logoblack from './assets/blackd.jpg';
import Logotekken from './assets/tekken.avif';
import Logomk from './assets/mk.png';
import Logofifa from './assets/fifa.jpeg';
import Logonb from './assets/nb.jpeg';
import Logoforza from './assets/forza.jpeg';
import Logonfs from './assets/nfs.jpg';
import Logonphasm from './assets/phasmo.jpeg';
import Logosh from './assets/sh.jpg';

export default function Categories() {

    return (
        <main className="category">

            <div className="information">
                <h2>FPS</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logocs} alt="Logo do cs" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 27/09/2023</li>
                                    <li><b>Distribuidora:</b> Valve</li>
                                    <li><b>Desenvolvedora:</b> Valve</li>
                                    <li><b>Análises:</b> Muito positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Counter-Strike 2</h3>
                                <p>Counter-Strike 2 é a evolução do clássico FPS tático da Valve, trazendo gráficos aprimorados com a Source 2, nova física de fumaça e melhorias no netcode. O jogo mantém a jogabilidade estratégica baseada em times, com partidas competitivas e casuais. Atualizações nos mapas, skins e mecânicas refinadas garantem uma experiência moderna para veteranos e novatos.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logoval} alt="Logo do valorant" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 02/06/2020</li>
                                    <li><b>Distribuidora:</b> Riot Games</li>
                                    <li><b>Desenvolvedora:</b> Riot Games</li>
                                    <li><b>Análises:</b> Muito positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Valorant</h3>
                                <p>Valorant é um FPS tático da Riot Games que combina tiroteios precisos com habilidades únicas de agentes, criando um gameplay estratégico e dinâmico. As partidas são baseadas em rodadas 5v5, onde equipes atacam ou defendem bomb sites. Com mapas variados, balanceamento frequente e um competitivo sólido, o jogo se destaca no cenário de esports.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="information">
                <h2>RPG</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logobaldur} alt="Logo do baldur's gate 3" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 03/08/2023</li>
                                    <li><b>Distribuidora:</b> Larian Studios</li>
                                    <li><b>Desenvolvedora:</b> Larian Studios</li>
                                    <li><b>Análises:</b> Extremamentes positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Baldur's Gate 3</h3>
                                <p>É um RPG baseado em Dungeons & Dragons, desenvolvido pela Larian Studios, que combina narrativa profunda, escolhas impactantes e combate tático por turnos. Os jogadores exploram um mundo vasto, recrutam companheiros e moldam a história com suas decisões. Com gráficos detalhados, multiplayer cooperativo e grande liberdade de ação, o jogo redefine o gênero RPG.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logoblack} alt="Logo do black desert" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 15/11/2017</li>
                                    <li><b>Distribuidora:</b> Pearl Abyss</li>
                                    <li><b>Desenvolvedora:</b> Pearl Abyss</li>
                                    <li><b>Análises:</b> Ligeiramente positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Black Desert</h3>
                                <p>É um MMORPG de mundo aberto conhecido por seus gráficos impressionantes, combate dinâmico e sistema de personalização detalhado. O jogo oferece um vasto mundo para explorar, com mecânicas como comércio, pesca, domação de cavalos e guerras entre guildas. Sua jogabilidade fluida e atualizações constantes garantem uma experiência imersiva e sempre evolutiva.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="information">
                <h2>LUTA</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logotekken} alt="Logo do tekken 8" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 25/01/2024</li>
                                    <li><b>Distribuidora:</b> Bandai Namco Entertainment</li>
                                    <li><b>Desenvolvedora:</b> Bandai Namco Studios Inc.</li>
                                    <li><b>Análises:</b> Neutras</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Tekken 8</h3>
                                <p>É um jogo de luta da clássica franquia da Bandai Namco, lançado em 2024. Com gráficos de última geração e uma nova mecânica chamada Heat System, o jogo foca em combates mais agressivos e dinâmicos. Traz de volta personagens icônicos e introduz novos lutadores em uma história centrada no confronto entre Kazuya Mishima e Jin Kazama.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logomk} alt="Logo do mortal kombat" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 19/09/2023</li>
                                    <li><b>Distribuidora:</b> Warner Bros. Games</li>
                                    <li><b>Desenvolvedora:</b> NetherRealm Studios, QLOC/li</li>
                                    <li><b>Análises:</b> Ligeiramente positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Mortal Kombat 1 (2023)</h3>
                                <p>É um reboot da icônica franquia de luta da NetherRealm Studios, trazendo um novo universo criado por Liu Kang. O jogo introduz o sistema Kameo Fighters, permitindo assistências durante as lutas, além de visuais impressionantes e brutalidades ainda mais violentas. Com um modo história cinematográfico e forte foco no competitivo, MK1 renova a série sem perder sua essência.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="information">
                <h2>ESPORTE</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logofifa} alt="Logo do fifa 25" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 27/09/2024</li>
                                    <li><b>Distribuidora:</b> Electronic Arts</li>
                                    <li><b>Desenvolvedora:</b> EA Canada, EA Romania</li>
                                    <li><b>Análises:</b> Neutras</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>EA SPORTS FC™ 25</h3>
                                <p>É a nova edição da icônica franquia de futebol da EA, trazendo melhorias gráficas, jogabilidade refinada e inteligência artificial aprimorada. O jogo introduz o modo Rush 5x5 para partidas rápidas e dinâmicas, além de mais ligas e times femininos. Com novas animações e física realista, ele busca oferecer a experiência mais autêntica de futebol virtual.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logonb} alt="Logo do NBA 2K25" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 03/09/2024</li>
                                    <li><b>Distribuidora:</b> 2k</li>
                                    <li><b>Desenvolvedora:</b> Visual Concepts</li>
                                    <li><b>Análises:</b> Neutras</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>NBA 2K25</h3>
                                <p>É a 26ª edição da série de simulação de basquete desenvolvida pela Visual Concepts. O jogo introduz o ProPLAY™, uma tecnologia que transforma filmagens reais da NBA em animações no jogo, proporcionando uma experiência mais realista. Além disso, oferece modos como MyCAREER, MyTEAM e MyNBA, permitindo aos jogadores seguir carreiras, montar equipes e gerenciar franquias.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="information">
                <h2>CORRIDA</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logoforza} alt="Logo do forza horizon 5" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 09/11/2021</li>
                                    <li><b>Distribuidora:</b> Xbox Game Studios</li>
                                    <li><b>Desenvolvedora:</b> Playground Games</li>
                                    <li><b>Análises:</b> Muito positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Forza Horizon 5</h3>
                                <p>É um jogo de corrida em mundo aberto que oferece um vasto mapa com biomas diversificados, gráficos realistas e uma extensa seleção de carros. Com modos online e eventos sazonais, o jogo proporciona uma experiência dinâmica e imersiva para os fãs de automobilismo.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logonfs} alt="Logo do Need for Speed™ Payback" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 06/11/2017</li>
                                    <li><b>Distribuidora:</b> Electronic Arts</li>
                                    <li><b>Desenvolvedora:</b> Ghost Games</li>
                                    <li><b>Análises:</b> Muito positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Need for Speed™ Payback</h3>
                                <p>É um jogo de corrida e ação ambientado em Fortune Valley, onde três pilotos – Tyler, Mac e Jess – buscam vingança contra o cartel "A Casa". Com uma jogabilidade focada em perseguições cinematográficas, personalização extrema de carros e missões explosivas, o game mistura elementos de corrida arcade e narrativa intensa. Seu mundo aberto oferece desafios, eventos e um sistema de progressão baseado em upgrades de performance e estilo.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <div className="information">
                <h2>TERROR</h2>
                <section className="card-section">

                    <div className="card-information">
                        <div className="primary">
                            <div className="primary-info">
                                <img src={Logonphasm} alt="Logo do Phasmophobia" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 18/09/2020</li>
                                    <li><b>Distribuidora:</b> Kinetic Gamess</li>
                                    <li><b>Desenvolvedora:</b> Kinetic Games</li>
                                    <li><b>Análises:</b> Extremamente positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Phasmophobia</h3>
                                <p>É um jogo de terror cooperativo onde os jogadores assumem o papel de investigadores paranormais, explorando locais assombrados para identificar diferentes tipos de fantasmas. Utilizando equipamentos como câmeras, sensores e rádios, eles devem coletar evidências sem serem mortos pelas entidades. A tensão aumenta à medida que os fantasmas se tornam mais agressivos e imprevisíveis.</p>
                            </div>
                        </div>

                        <div className="second">
                            <div className="second-info">
                                <img src={Logosh} alt="Logo do silent hill 2" />

                                <ul>
                                    <li><b>Data de Lançamento:</b> 08/10/2024</li>
                                    <li><b>Distribuidora:</b> KONAMI</li>
                                    <li><b>Desenvolvedora:</b> Bloober Team SA</li>
                                    <li><b>Análises:</b> Muito positivas</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Silent Hill 2</h3>
                                <p>É um jogo de terror psicológico focado na exploração, resolução de enigmas e combate contra criaturas grotescas. Ele se destaca pela atmosfera sombria e narrativa profunda, que explora temas como culpa, luto e redenção. O jogo é amplamente considerado um dos maiores clássicos do gênero survival horror.</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}