import './style.css';
import { HabilidadesCardProps } from './types';

const HabilidadesCard = ({ name, icon, level }) => (
    <div className="skill-card">
        <img 
            src={`assets/img/habilidades/${icon}`} 
            alt={`${name} icon`} 
            className="icon"
            loading="lazy"
        />
        <p className="name">{name}</p>
        <p className="level">{level}</p>
    </div>
);

HabilidadesCard.propTypes = HabilidadesCardProps;

export default HabilidadesCard;