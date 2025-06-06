import PropTypes from 'prop-types';

export const HabilidadesCardProps = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired
};

export const defaultProps = {
    level: 'Iniciante'
}; 