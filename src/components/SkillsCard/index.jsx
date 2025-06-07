import './style.css';
import { SkillsCardProps } from './types';

const SkillsCard = ({ name, icon, level }) => (
    <div className="skill-card">
        <img 
            src={`assets/img/skills/${icon}`} 
            alt={`${name} icon`} 
            className="icon"
            loading="lazy"
        />
        <p className="name">{name}</p>
        <p className="level">{level}</p>
    </div>
);

SkillsCard.propTypes = SkillsCardProps;

export default SkillsCard;