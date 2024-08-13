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

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
            <div className="container">
                <div className="logo-container">
                    <a href="#" className="logo">Pedro Fiel <span className="destaque">| DEV</span></a>
                </div>
                <nav className="menu" aria-label="Main Navigation">
                    <ul className="menu-list">
                        <li className="menu-item"><a href="#" className="menu-link">Inicio</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Sobre Mim</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Habilidades</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Projetos</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Experiências</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;