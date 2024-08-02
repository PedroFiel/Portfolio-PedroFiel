import './style.css';
import Pedro from '../../assets/logo_pedro.png';
import Whatsapp from '../../assets/contacts/whatsapp.svg';
import Github from '../../assets/contacts/github.svg';
import Linkedin from '../../assets/contacts/linkedin.svg';
import Email from '../../assets/contacts/email.svg';
import Curriculo from '../../assets/contacts/curriculo.svg';

function Introducao() {
  const firtsTitle = '{%';
  const lastTitle = '%}';

  return (
    <div className='introduction'>
      <div className='content-introduction'>
        <div className='container-information'>
          <h2>
            <span className='first-element'>{firtsTitle}</span> Olá! Eu sou o <span className='name'>Pedro Fiel</span> <span className='second-element'>{lastTitle}</span>
          </h2>
          <p>Desenvolvedor Front-end.</p>
          <div className='contacts'>
            <ul className='contacts-list'>
              <li><a href="#"><img src={Whatsapp} alt=""/></a></li>
              <li><a href="#"><img src={Email} alt=""/></a></li>
              <li><a href="#"><img src={Github} alt=""/></a></li>
              <li><a href="#"><img src={Linkedin} alt=""/></a></li>
              <li><a href="#"><img src={Curriculo} alt=""/></a></li>
            </ul>
          </div>
        </div>
        <div className='container-image'>
          <img src={Pedro} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Introducao;