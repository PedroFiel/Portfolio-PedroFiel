import React, { useState, useEffect } from 'react';
import './style.css';
import Pedro from '../../assets/pedro.jpeg';
import Whatsapp from '../../assets/contacts/whatsapp.svg';
import Github from '../../assets/contacts/github.svg';
import Linkedin from '../../assets/contacts/linkedin.svg';
import Email from '../../assets/contacts/email.svg';
import Curriculo from '../../assets/contacts/curriculo.svg';

function Introducao() {
  const firstTitle = '{%';
  const lastTitle = '%}';

  const keyWords = ['Front-end', 'Web', 'Shopify'];
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
    <div id='inicio' className='introduction'>
      <div className='content-introduction'>
        <div className='container-information'>
          <h2>
            <span className='first-element'>{firstTitle}</span> Olá! Eu sou o <span className='name'>Pedro Fiel</span> <span className='second-element'>{lastTitle}</span>
          </h2>
          <p>Desenvolvedor <span className='typed-text'>{currentWord}</span><span className='bar-animation'>|</span></p>
          <div className='contacts'>
            <ul className='contacts-list'>
              <li><a href="https://wa.me/5511991502747" target="_blank"><img src={Whatsapp} alt=""/></a></li>
              <li><a href="mailto:pedrinhoffiel@gmail.com" target="_blank"><img src={Email} alt=""/></a></li>
              <li><a href="https://github.com/PedroFiel" target="_blank"><img src={Github} alt=""/></a></li>
              <li><a href="https://www.linkedin.com/in/pedro-freitas-fiel-bb9315250/" target="_blank"><img src={Linkedin} alt=""/></a></li>
              {/* <li><a href="#"><img src={Curriculo} alt=""/></a></li> */}
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
