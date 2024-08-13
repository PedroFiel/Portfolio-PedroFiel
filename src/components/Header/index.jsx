import React, { useState, useEffect } from 'react';
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
            <div className="container">
                <div className="logo-container">
                    <a href="/" className="logo">Pedro Fiel <span className="destaque">| DEV</span></a>
                </div>
                <nav className="menu" aria-label="Main Navigation">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#inicio" className="menu-link" onClick={(e) => handleScrollToSection(e, 'inicio')}>Inicio</a>
                        </li>
                        <li className="menu-item">
                            <a href="#sobre-mim" className="menu-link" onClick={(e) => handleScrollToSection(e, 'sobre-mim')}>Sobre Mim</a>
                        </li>
                        <li className="menu-item">
                            <a href="#habilidades" className="menu-link" onClick={(e) => handleScrollToSection(e, 'habilidades')}>Habilidades</a>
                        </li>
                        <li className="menu-item">
                            <a href="#experiencias" className="menu-link" onClick={(e) => handleScrollToSection(e, 'experiencias')}>Experiências</a>
                        </li>
                        <li className="menu-item">
                            <a href="#projetos" className="menu-link" onClick={(e) => handleScrollToSection(e, 'projetos')}>Projetos</a>
                        </li>   
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;