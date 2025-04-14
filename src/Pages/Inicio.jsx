import Header from "../Componentes/Cabecalho/Header";
import Genres from "../Componentes/Generos/Genres";
import Footer from "../Componentes/Rodape/Footer";
import About from "../Componentes/Sobre/About";
import Title from "../Componentes/Titulo/Title";

export default function Inicio() {
    return (
        <>
            <Header />
            <Title />
            <About />
            <Genres />
            <Footer />
        </>

    )
}