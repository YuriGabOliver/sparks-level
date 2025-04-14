import './Popular.css'
import Pubg from './assets/pubg.jpg';
import Fort from './assets/fort.jpg';
import Roblox from './assets/roblox.png';
import Gta from './assets/gta.jpg';
import Mine from './assets/mine.avif';
import Rdr from './assets/rdr.avif';
import Bf from './assets/bf.jpg';
import Fs from './assets/fs.jpg';
import Cod from './assets/cod.avif';
import Apex from './assets/apex.webp';

export default function Popular() {
    return (
        <section className="popular">
            <div className="popular-text-top">
                <h2>JOGOS POPULARES</h2>
            </div>
            <div className="popular-card">
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 23/març/2017</li>
                            <li>Distribuidora: KRAFTON, Inc</li>
                            <li>Desenvolvedora: PUBG Corporation</li>
                            <li>Análises: Neutras</li>
                        </ul>
                        <img src={Pubg} alt="logo do pubg" />
                    </div>
                    <div className="popular-name">
                        <h3>PUBG: Battleground</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 21/jul/17</li>
                            <li>Distribuidora: Epic Games</li>
                            <li>Desenvolvedora: Epic Games</li>
                            <li>Análises: Muito positivas</li>
                        </ul>
                        <img src={Fort} alt="logo do fortnite" />
                    </div>
                    <div className="popular-name">
                        <h3>Fortnite</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 01/set/2006</li>
                            <li>Distribuidora: Roblox Corporation</li>
                            <li>Desenvolvedora: Roblox Corporation</li>
                            <li>Análises: Muito positivas</li>
                        </ul>
                        <img src={Roblox} alt="logo do roblox" />
                    </div>
                    <div className="popular-name">
                        <h3>Roblox</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 17/maio/2009</li>
                            <li>Distribuidora: Mojang</li>
                            <li>Desenvolvedora: Mojang</li>
                            <li>Análises: Muito Positivas</li>
                        </ul>
                        <img src={Mine} alt="logo do minecraft" />
                    </div>
                    <div className="popular-name">
                        <h3>Minecraft</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 17/set/2013</li>
                            <li>Distribuidora: Rockstar Games</li>
                            <li>Desenvolvedora: Rockstar North</li>
                            <li>Análises: Muito positivas</li>
                        </ul>
                        <img src={Gta} alt="logo do gta 5" />
                    </div>
                    <div className="popular-name">
                        <h3>Grand Theft Auto V</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 5/dez./2019</li>
                            <li>Distribuidora: Rockstar Games</li>
                            <li>Desenvolvedora: Rockstar Games</li>
                            <li>Análises: Muito positivas</li>
                        </ul>
                        <img src={Rdr} alt="logo do red dead redemption 2" />
                    </div>
                    <div className="popular-name">
                        <h3>Red Dead Redemption 2</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 19/nov./2021</li>
                            <li>Distribuidora: Electronic Arts</li>
                            <li>Desenvolvedora: DICE</li>
                            <li>Análises: Neutras</li>
                        </ul>
                        <img src={Bf} alt="logo do battlefield 2042" />
                    </div>
                    <div className="popular-name">
                        <h3>Battlefield 2042</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 12/nov./2024</li>
                            <li>Distribuidora: Giants Software</li>
                            <li>Desenvolvedora: Giants Software</li>
                            <li>Análises: Muito positivas</li>
                        </ul>
                        <img src={Fs} alt="logo do farming simulator 25" />
                    </div>
                    <div className="popular-name">
                        <h3>Farming Simulator 25</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento: 16/nov./2022</li>
                            <li>Distribuidora: Activision</li>
                            <li>Desenvolvedora: Activision</li>
                            <li>Análises: Neutras</li>
                        </ul>
                        <img src={Cod} alt="logo do call of duty warzone" />
                    </div>
                    <div className="popular-name">
                        <h3>Call of Duty: Warzone</h3>
                    </div>
                </div>
                <div className="popular-item">
                    <div className="popular-info">
                        <ul className="popular-ul">
                            <li>Data de lançamento:</li>
                            <li>Distribuidora: Electronic Arts</li>
                            <li>Desenvolvedora: Respawn</li>
                            <li>Análises: Neutras</li>
                        </ul>
                        <img src={Apex} alt="logo do apex legends" />
                    </div>
                    <div className="popular-name">
                        <h3>Apex Legends</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}