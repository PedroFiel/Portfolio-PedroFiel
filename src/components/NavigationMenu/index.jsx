import './style.css';
import { NavigationMenuProps } from './types';

function NavigationMenu({ isMobile, handleScrollToSection, CloseIcon, menuRef, handleMenuIcon, icons = {} }) {

    const { Linkedin, Curriculo, Whatsapp, Email, Github } = icons;
    return (
        <nav ref={menuRef} className={`header-menu__nav ${isMobile ? 'header-menu__nav--mobile' : 'header-menu__nav--desktop'}`} aria-label="Main Navigation">
            {isMobile && (
                <div className="header-menu__nav-heading">
                    <button className="header-menu__nav-close" onClick={handleMenuIcon}>
                        {CloseIcon && <CloseIcon />}
                    </button>
                </div>
            )}
            <ul className="header-menu__nav-list">
                <li className="header-menu__nav-item">
                    <a href="#introduction" className="header-menu__nav-link" onClick={(e) => handleScrollToSection(e, 'introduction')}>Inicio</a>
                </li>
                <li className="header-menu__nav-item">
                    <a href="#about-me" className="header-menu__nav-link" onClick={(e) => handleScrollToSection(e, 'about-me')}>Sobre Mim</a>
                </li>
                <li className="header-menu__nav-item">
                    <a href="#skills" className="header-menu__nav-link" onClick={(e) => handleScrollToSection(e, 'skills')}>Habilidades</a>
                </li>
                <li className="header-menu__nav-item">
                    <a href="#experience" className="header-menu__nav-link" onClick={(e) => handleScrollToSection(e, 'experience')}>Experiências</a>
                </li>
                <li className="header-menu__nav-item">
                    <a href="#projects" className="header-menu__nav-link" onClick={(e) => handleScrollToSection(e, 'projects')}>Projetos</a>
                </li>   
            </ul>
            {isMobile && icons && (
                <ul className="header-menu__nav-footer">
                    {Linkedin && (
                        <li><a href="https://www.linkedin.com/in/pedro-freitas-fiel-bb9315250/" target="_blank" rel="noopener noreferrer"> <Linkedin /> </a></li>
                    )}
                    {Whatsapp && (
                        <li><a href="https://wa.me/5511991502747" target="_blank" rel="noopener noreferrer"> <Whatsapp /> </a></li>
                    )}
                    {Email && (
                        <li><a href="mailto:pedrofiel.dev@gmail.com" target="_blank" rel="noopener noreferrer"> <Email /> </a></li>
                    )}
                    {Github && (
                        <li><a href="https://github.com/PedroFiel" target="_blank" rel="noopener noreferrer"> <Github /> </a></li>
                    )}
                    {Curriculo && (
                        <li><a href="#" target="_blank" rel="noopener noreferrer"> <Curriculo /> </a></li>
                    )}
                </ul>
            )}
        </nav>
    );
}

NavigationMenu.propTypes = NavigationMenuProps;

export default NavigationMenu;