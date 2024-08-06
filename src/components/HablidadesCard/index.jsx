import './style.css';

const HabilidadesCard = ({ name, icon, level }) => {
    return (
        <div className="skill-card">
            <img src={`assets/img/habilidades/${icon}`} alt={`${name} icon`} className="icon" />
            <p className="name">{name}</p>
            <p className="level">{level}</p>
      </div>
    );
};

export default HabilidadesCard;