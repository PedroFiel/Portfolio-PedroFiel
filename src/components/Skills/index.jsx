import './style.css';
import SkillsCard from '../SkillsCard'; 
import skills from '../../json/skills.json';

const Skills = () => {
  return (
    <div id='skills' className='skills-section'>
        <div className='skills__container'>
            <div className='skills__header'>
                <h2>Habilidades</h2>
                <p>Conheça as habilidades que possuo</p>
            </div>
            <div className="skills__list">
            {skills.map(skill => (
                <SkillsCard key={skill.id} name={skill.name} level={skill.level} icon={skill.src} />
            ))}
            </div>
        </div>
    </div>
  );
};

export default Skills;