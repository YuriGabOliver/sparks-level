import Header from "../Componentes/Cabecalho/Header";
import Filter from "../Componentes/FiltrarJogos/Filters/Filter";
import Popular from "../Componentes/FiltrarJogos/Populares/Popular";
import Footer from "../Componentes/Rodape/Footer";

export default function Jogos() {
    return (
        <>
            <Header />
            <Filter />
            <Popular />
            <Footer />
        </>
    )
}