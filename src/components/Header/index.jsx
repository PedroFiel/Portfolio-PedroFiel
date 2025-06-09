import { useState, useEffect, useRef } from 'react';
import NavigationMenu from '../NavigationMenu';
import MenuIcon from '../../assets/header/menu-icon.svg?react';
import CloseIcon from '../../assets/header/close-icon.svg?react';
import Linkedin from '../../assets/contacts/linkedin.svg?react';
import Curriculo from '../../assets/contacts/curriculo.svg?react';
import Whatsapp from '../../assets/contacts/whatsapp.svg?react';
import Email from '../../assets/contacts/email.svg?react';
import Github from '../../assets/contacts/github.svg?react';
import './style.css';

function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    
    const icons = {
        Linkedin,
        Curriculo,
        Whatsapp,
        Email,
        Github
    };

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

        if(isMenuOpen){
            handleMenuIcon();
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMenuIcon = () => {
        setIsMenuOpen(!isMenuOpen);

        if(!isMenuOpen){
            openMenuIcon();
        } else {
            closeMenuIcon();
        }
    };

    const openMenuIcon = () => {
        if (menuRef.current) {
            menuRef.current.setAttribute('open', '');
        }
    };

    const closeMenuIcon = () => {
        if (menuRef.current) {
            menuRef.current.removeAttribute('open');
        }
    };

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
            <div className="header__container">
                <div className="header__logo-container">
                    <a href="/" className="header__logo">Pedro Fiel <span className="header__logo-destaque">| DEV</span></a>
                </div>

                <div className="header-menu--mobile">
                    <button className="header-menu__icon" onClick={handleMenuIcon}>
                        <MenuIcon />
                    </button>
                    <NavigationMenu isMobile={true} handleScrollToSection={handleScrollToSection} CloseIcon={CloseIcon} menuRef={menuRef} handleMenuIcon={handleMenuIcon} icons={icons}/>
                </div>
                <div className="header-menu--desktop">
                    <NavigationMenu isMobile={false} handleScrollToSection={handleScrollToSection} />
                </div>
            </div>
            <div
                className={`overlay ${isMenuOpen ? 'overlay--active' : ''}`}
                onClick={handleMenuIcon}
            ></div>
        </header>
    );
}

export default Header;