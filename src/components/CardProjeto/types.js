import PropTypes from 'prop-types';

export const cardProjetoProps = {
    projeto: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        text_techs: PropTypes.string.isRequired,
        techs: PropTypes.arrayOf(PropTypes.string).isRequired,
        descricao: PropTypes.string.isRequired,
        card_buttons: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
};