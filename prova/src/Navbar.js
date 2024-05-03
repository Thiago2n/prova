import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="Nav">
            <ul className="Lista">
                <li className="Menu">
                    <Link className="Home" to="/"><h4>Home</h4></Link>
                </li>
                <li className="NÓS">
                    <Link className="Quemsomos" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="Conta">
                    <Link className="Contato" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;