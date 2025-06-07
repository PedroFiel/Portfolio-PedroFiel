import CardProject from '../CardProject';
import './style.css';
import projects from '../../json/projects.json';

function Projects() {
    return (
      <div id='projetos' className="section-projects">
        <div className='container-projects'>
          <div className='header-projects'>
            <h1>Projetos</h1>
            <p>Confira abaixo alguns dos projetos que desenvolvi</p>
          </div>
  
          <div className='cards-projects'>
            {projects.map(project => (
              <CardProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Projects;