import { useState, useEffect } from 'react';
import './style.css';

function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollTop) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleScrollToSection = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
            <div className="header__container">
                <div className="header__logo-container">
                    <a href="/" className="header__logo">Pedro Fiel <span className="header__logo-destaque">| DEV</span></a>
                </div>
                <nav className="header__menu" aria-label="Main Navigation">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <a href="#introduction" className="header__menu-link" onClick={(e) => handleScrollToSection(e, 'introduction')}>Inicio</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#about-me" className="header__menu-link" onClick={(e) => handleScrollToSection(e, 'about-me')}>Sobre Mim</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#skills" className="header__menu-link" onClick={(e) => handleScrollToSection(e, 'skills')}>Habilidades</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#experience" className="header__menu-link" onClick={(e) => handleScrollToSection(e, 'experience')}>Experiências</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#projects" className="header__menu-link" onClick={(e) => handleScrollToSection(e, 'projects')}>Projetos</a>
                        </li>   
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;