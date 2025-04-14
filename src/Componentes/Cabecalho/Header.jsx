import { Link } from 'react-router-dom'
import Logosl from './assets/logosl.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="header-logo">
                <Link to="/">
                    <img src={Logosl} alt="Logo Sparks" />
                </Link>
            </div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/jogos">Jogos</Link></li>
                <li><Link to="/Streaming">Streaming</Link></li>
            </ul>
        </header>
    )
}