import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <a href="#" className="logo">Pedro Fiel <span className="destaque" >| DEV</span></a>
                </div>
                <nav className="menu" aria-label="Main Navigation">
                    <ul className="menu-list">
                        <li className="menu-item"><a href="#" className="menu-link">Inicio</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Sobre Mim</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Habilidades</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Projetos</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Formação</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Experiências</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;