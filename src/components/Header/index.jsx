import './style.css';
import logoPedro from '../../assets/logo_pedro.png';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <img src={logoPedro} alt="Imagem Desenhada de Pedro" className="logo" />
                </div>
                <nav className="menu" aria-label="Main Navigation">
                    <ul className="menu-list">
                        <li className="menu-item"><a href="#" className="menu-link">Projetos</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Habilidades</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Sobre mim</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Formação</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Experiências</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;