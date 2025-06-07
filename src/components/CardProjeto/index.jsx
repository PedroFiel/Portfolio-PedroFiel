import "./style.css";
import { cardProjetoProps } from './types';

const CardProjeto = ({ projeto }) => {
    const { nome, text_techs, techs, descricao, card_buttons } = projeto;

    return (
        <div className="card-project">
            <div className="card-content">
                <div className="card-header">
                    <h2>{nome}</h2>
                    <p>{text_techs}</p>
                </div>
                <div className="card-technologies">
                    {techs.map((tech, index) => (
                        <span key={`${tech}-${index}`}>{tech}</span>
                    ))}
                </div>
                <div className="card-description">
                    <p>{descricao}</p>
                </div>
            </div>
            <div className="card-buttons">
                {card_buttons.map(({ id, text, link }) => (
                    <a 
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${text} do projeto ${nome}`}
                    >
                        <p>{text}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

CardProjeto.propTypes = cardProjetoProps;

export default CardProjeto;