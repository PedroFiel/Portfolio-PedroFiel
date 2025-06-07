import PropTypes from 'prop-types';

export const SkillsCardProps = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired
};

export const defaultProps = {
    level: 'Iniciante'
}; 