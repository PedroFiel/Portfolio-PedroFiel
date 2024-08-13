import CardProjeto from '../CardProjeto';
import './style.css';
import projetos from '../../json/projetos.json';

function Projetos() {
    return (
      <div id='projetos' className="section-projects">
        <div className='container-projects'>
          <div className='header-projects'>
            <h1>Projetos</h1>
            <p>Confira abaixo alguns dos projetos que desenvolvi</p>
          </div>
  
          <div className='cards-projects'>
            {projetos.map(projeto => (
              <CardProjeto key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Projetos;