import { useState, useEffect } from 'react';
import './style.css';
import Pedro from '../../assets/pedro.jpeg';
import Whatsapp from '../../assets/contacts/whatsapp.svg';
import Github from '../../assets/contacts/github.svg';
import Linkedin from '../../assets/contacts/linkedin.svg';
import Email from '../../assets/contacts/email.svg';
import Curriculo from '../../assets/contacts/curriculo.svg';

const keyWords = ['Front-end', 'Web', 'Shopify'];

function Introduction() {
  const firstTitle = '{%';
  const lastTitle = '%}';

  const [currentWord, setCurrentWord] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeWord = () => {
      setCurrentWord((prev) => prev + keyWords[currentWordIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    };

    if (charIndex < keyWords[currentWordIndex].length) {
      const timeout = setTimeout(typeWord, 180); 
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentWord('');
        setCurrentWordIndex((prev) => (prev + 1) % keyWords.length);
      }, 2000); 
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentWordIndex]);

  return (
    <div id='introduction' className='introduction'>
      <div className='introduction__content'>
        <div className='introduction__information'>
          <h2>
            <span className='first-element'>{firstTitle}</span> Olá! Eu sou o <span className='name'>Pedro Fiel</span> <span className='second-element'>{lastTitle}</span>
          </h2>
          <p>Desenvolvedor <span className='typed-text'>{currentWord}</span><span className='bar-animation'>|</span></p>
          <div className='introduction__contacts'>
            <ul className='introduction__contacts-list'>
              <li><a href="https://wa.me/5511991502747" target="_blank"><img src={Whatsapp} alt="Icone Whatsapp"/></a></li>
              <li><a href="mailto:pedrofiel.dev@gmail.com" target="_blank"><img src={Email} alt="Icone Email"/></a></li>
              <li><a href="https://github.com/PedroFiel" target="_blank"><img src={Github} alt="Icone Github"/></a></li>
              <li><a href="https://www.linkedin.com/in/pedro-freitas-fiel-bb9315250/" target="_blank"><img src={Linkedin} alt="Icone Linkedin"/></a></li>
              <li><a href="#"><img src={Curriculo} alt="Icone Curriculo"/></a></li>
            </ul>
          </div>
        </div>
        <div className='introduction__image'>
          <img src={Pedro} alt="Foto de Perfil"/>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
