import './style.css';
import HabilidadesCard from '../HablidadesCard'; 
import skills from '../../json/skills.json';

const Habilidades = () => {
  return (
    <div id='habilidades' className='skills-section'>
        <div className='skills-container'>
            <div className='skills-header'>
                <h2>Habilidades</h2>
                <p>Conheça as habilidades que possuo</p>
            </div>
            <div className="skills">
            {skills.map(skill => (
                <HabilidadesCard key={skill.id} name={skill.name} level={skill.level} icon={skill.src} />
            ))}
            </div>
        </div>
    </div>
  );
};

export default Habilidades;