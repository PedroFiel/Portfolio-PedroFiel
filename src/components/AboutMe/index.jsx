import './style.css';
import Pedro from '../../assets/pedro-2.jpeg';

function AboutMe() {
  return (
    <div id='about-me' className='about-me__section'>   
        <div className='about-me__container'>
            <div className='about-me__image'>
                <img src={Pedro} alt="" />
            </div>  
            <div className='about-me__information'>
                <div className='about-me__content'>
                    <div className='about-me__content-header'>
                        <h2>Sobre Mim</h2>
                        <h3>Desenvolvedor Front-end</h3>
                    </div>
                    <div className='about-me__content-description'>
                        <p>Em 2020 iniciei minha jornada em busca de ser um <span>Desenvolvedor Web / Programador</span>, fazendo o ensino médio integrado com o curso técnico. Durante o ensino médio continuei estudando por conta própria e me atualizando através de cursos, com o objetivo de me tornar um bom profissional na área.</p>
                        <p>Tive experiências incríveis enquanto estudava, desenvolvendo projetos na escola como o TCC focado em Robótica e Desenvolvimento Web.</p>
                        <p> Atualmente estou cursando <span>Engenharia da Computação</span> e atuo como <span>Shopify Developer</span> com foco na criação de temas altamente customizáveis e responsivos para lojas de e-commerce Shopify. Buscando de todas as formas com a minha capacidade, contribuir e atender as necessidades da empresa e dos clientes de onde estiver.</p>
                    </div>
                </div>
                <div className='about-me__formation'>
                    <div className='about-me__formation-header'>
                        <h3>Formação</h3>
                    </div>
                    <div className='about-me__formation-description'>
                        <div className='about-me__formation-block'>
                            <p>2023 - data atual | Bacharel <span>Engenharia da Computação</span></p>
                            <p>Centro Universitário Adventista de São Paulo UNASP</p>
                        </div>
                        <div className='about-me__formation-block'>
                            <p>2020 - 2022 | Ensino médio <span>técnico em informática</span></p>
                            <p>Centro Universitário Adventista de São Paulo UNASP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;