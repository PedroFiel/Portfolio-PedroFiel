import PropTypes from 'prop-types';

export const NavigationMenuProps = {
    isMobile: PropTypes.bool.isRequired,
    handleScrollToSection: PropTypes.func.isRequired,
    CloseIcon: PropTypes.elementType,
    menuRef: PropTypes.object,
    handleMenuIcon: PropTypes.func,
    icons: PropTypes.object
}