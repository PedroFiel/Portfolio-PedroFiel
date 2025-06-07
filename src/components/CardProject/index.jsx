import "./style.css";
import { cardProjectProps } from './types';

const CardProject = ({ project }) => {
    const { name, text_techs, techs, description, card_buttons } = project;

    return (
        <div className="card-project">
            <div className="card-project__content">
                <div className="card-project__header">
                    <h2>{name}</h2>
                    <p>{text_techs}</p>
                </div>
                <div className="card-project__technologies">
                    {techs.map((tech, index) => (
                        <span key={`${tech}-${index}`}>{tech}</span>
                    ))}
                </div>
                <div className="card-project__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-project__buttons">
                {card_buttons.map(({ id, text, link }) => (
                    <a 
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${text} do projeto ${name}`}
                    >
                        <p>{text}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

CardProject.propTypes = cardProjectProps;

export default CardProject;