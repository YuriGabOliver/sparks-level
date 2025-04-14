import { useState } from 'react';
import './Filter.css'
import Logocs from './assets/cs.jpg';
import Logoval from './assets/val.jpg';
import Logonfs from './assets/nfs.jpg';
import Logofifa from './assets/fifa.jpeg';
import Logomk from './assets/mk.png';
import Logoets from './assets/ets.png';
import Logogow from './assets/gow.jpg';
import Logobld from './assets/bld.jpg';
import Logospd from './assets/spd.jpg';
import Logoac from './assets/ac.jpg';
import Logosh from './assets/sh.jpg';
import Logodmc from './assets/dmc.jpg';
import Logore from './assets/re.jpg';
import Logofc from './assets/fc.jpg';
import Logotw from './assets/tw.jpg';
import Logosot from './assets/sot.jpg';

const jogos = [
    {
        nome: "Counter-strike 2", image: Logocs, alt: "Logo do cs",
        liOne: "Data de Lançamento:", liUm: "27/set/2023",
        liTwo: "Distribuidora:", liDois: "Valve",
        liTree: "Desenvolvedora:", liTres: "Valve",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Valorant", image: Logoval, alt: "Logo do valorant",
        liOne: "Data de Lançamento:", liUm: "2/jun/2020",
        liTwo: "Distribuidora:", liDois: "Riot Games",
        liTree: "Desenvolvedora:", liTres: "Riot Games",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Mortal Kombat", image: Logomk, alt: "Logo do moratl kombat",
        liOne: "Data de Lançamento:", liUm: "19/set./2023",
        liTwo: "Distribuidora:", liDois: "Warner Bros.Games",
        liTree: "Desenvolvedora:", liTres: "NetherRealm Studios, QLOC",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Need For Speed", image: Logonfs, alt: "Logo do need for speed",
        liOne: "Data de Lançamento:", liUm: "6/nov./2017",
        liTwo: "Distribuidora:", liDois: "Electronic Arts",
        liTree: "Desenvolvedora:", liTres: "Ghost Games",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Ea Fc 2025", image: Logofifa, alt: "Logo do ea fc 25",
        liOne: "Data de Lançamento:", liUm: "27/set./2024",
        liTwo: "Distribuidora:", liDois: "Electronic Arts",
        liTree: "Desenvolvedora:", liTres: "EA Canada, EA Romania",
        liFour: "Análise:", liQuatro: "Neutras",
    },
    {
        nome: "Euro Truck Simulator 2", image: Logoets, alt: "Logo do euro truck simulator 2",
        liOne: "Data de Lançamento:", liUm: "18/out./2012",
        liTwo: "Distribuidora:", liDois: "SCS Software",
        liTree: "Desenvolvedora:", liTres: "SCS Software",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "God of War Ragnarok", image: Logogow, alt: "Logo do god of war ragnarok",
        liOne: "Data de Lançamento:", liUm: "19/set./2024",
        liTwo: "Distribuidora:", liDois: "PlayStation Publishing LLC",
        liTree: "Desenvolvedora:", liTres: "Santa Monica Studio, Jetpack Interactive",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Bloodstrike", image: Logobld, alt: "Logo do bloodstrike",
        liOne: "Data de Lançamento:", liUm: "13/mar./2025",
        liTwo: "Distribuidora:", liDois: "NetEase Games",
        liTree: "Desenvolvedora:", liTres: "NetEase Games",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Marvel's Spider-Man 2", image: Logospd, alt: "Logo do marvel's spider-Man 2",
        liOne: "Data de Lançamento:", liUm: "30/jan./2025",
        liTwo: "Distribuidora:", liDois: "PlayStation Publishing LLC",
        liTree: "Desenvolvedora:", liTres: "Insomniac Games, Nixxes Software",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Silent Hill 2", image: Logosh, alt: "Logo do silent hill 2",
        liOne: "Data de Lançamento:", liUm: "08/out./2024",
        liTwo: "Distribuidora:", liDois: "KONAMI",
        liTree: "Desenvolvedora:", liTres: "Bloober Team SA",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Assassin’s Creed Shadows", image: Logoac, alt: "Logo do assassin’s creed shadows",
        liOne: "Data de Lançamento:", liUm: "19/mar./2025",
        liTwo: "Distribuidora:", liDois: "Ubisoft",
        liTree: "Desenvolvedora:", liTres: "Ubisoft",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Devil May Cry 5", image: Logodmc, alt: "Logo do devil may cry 5",
        liOne: "Data de Lançamento:", liUm: "7/mar./2019",
        liTwo: "Distribuidora:", liDois: "CAPCOM Co., Ltd.",
        liTree: "Desenvolvedora:", liTres: "CAPCOM Co., Ltd",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Resident Evil 2", image: Logore, alt: "Logo do resident evil 2",
        liOne: "Data de Lançamento:", liUm: "25/jan./2019",
        liTwo: "Distribuidora:", liDois: "CAPCOM Co., Ltd.",
        liTree: "Desenvolvedora:", liTres: "CAPCOM Co., Ltd",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Far Cry 6", image: Logofc, alt: "Logo do far cry 6",
        liOne: "Data de Lançamento:", liUm: "11/mai./2023",
        liTwo: "Distribuidora:", liDois: "Ubisoft",
        liTree: "Desenvolvedora:", liTres: "Ubisoft",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "The Witcher 3: Wild Hunt", image: Logotw, alt: "Logo do the witcher 3: wild hunt",
        liOne: "Data de Lançamento:", liUm: "18/mai./2015",
        liTwo: "Distribuidora:", liDois: "CD PROJEKT RED",
        liTree: "Desenvolvedora:", liTres: "CD PROJEKT RED",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
    {
        nome: "Sea of Thieves", image: Logosot, alt: "Logo do the sea of thieves",
        liOne: "Data de Lançamento:", liUm: "3/jun./2020",
        liTwo: "Distribuidora:", liDois: "Xbox Game Studios",
        liTree: "Desenvolvedora:", liTres: "Rare Ltd",
        liFour: "Análise:", liQuatro: "Muito positivas",
    },
];

export default function Filter() {
    const [pesquisar, setPesquisar] = useState("");

    const filtrarJogo = pesquisar.trim() ? jogos.filter((jogo) =>
        jogo.nome.toLowerCase().startsWith(pesquisar.toLowerCase())
    ) : jogos;

    return (
        <section className="search-jogos">
            <div className="search-text-top">
                <h1>SESSÃO DE JOGOS</h1>
            </div>
            <div className="input-group">

                <div className="input-icon">
                    <i class="ri-search-line"></i>
                </div>
                <input type="text" class="search-input" placeholder="Buscar jogo" value={pesquisar}
                    onChange={(e) => setPesquisar(e.target.value)} />
            </div>


            {filtrarJogo.length > 0 ? (
                <div className="search-content">
                    {
                        filtrarJogo.map((jogo, index) => (
                            <div className="search-card" key={index}>
                                <div className="search-info">
                                    <ul>
                                        <li>{jogo.liOne} {jogo.liUm}</li>
                                        <li>{jogo.liTwo} {jogo.liDois}</li>
                                        <li>{jogo.liTree} {jogo.liTres}</li>
                                        <li>{jogo.liFour} {jogo.liQuatro}</li>
                                    </ul>
                                    <img src={jogo.image} alt={jogo.alt} />

                                </div>
                                <div className="search-name">
                                    <h3>{jogo.nome}</h3>
                                </div>

                            </div>
                        ))
                    }

                </div>
            ) : (
                <div className="not-found">
                    <div className="not-icon">
                        <ul>
                            <li>Data de lançamento: Erro</li>
                            <li>Distribuidora: Erro</li>
                            <li>Desenvolvedora: Erro</li>
                            <li>Análise: Erro</li>
                        </ul>
                        <div className="icon-load">
                            <i class="ri-alert-fill"></i>
                            <p>Imagem Indisponível</p>
                        </div>
                    </div>
                    <div className="not-text">
                        <p>Jogo não encontrado</p>
                    </div>
                </div>
            )}


        </section>
    )
}
