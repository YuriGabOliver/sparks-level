import { Link } from 'react-router-dom'
import './Footer.css'
import Logosl from './assets/logosl.png'

export default function Footer() {
    return (
        <footer>

            <div className="footer-logo">
                <Link to="/">
                    <img src={Logosl} alt="Logo Sparks" />
                </Link>
            </div>

            <div className="footer-text">
                <p>©Todos os direitos reservados</p>
            </div>

        </footer>
    )
}