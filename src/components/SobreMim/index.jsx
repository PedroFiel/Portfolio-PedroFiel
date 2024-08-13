import './style.css';
import Pedro from '../../assets/pedro-2.jpeg';

function SobreMim() {
  return (
    <div id='sobre-mim' className='sobre_mim-section'>   
        <div className='sobre_mim-container'>
            <div className='image-container'>
                <img src={Pedro} alt="" />
            </div>  
            <div className='information-container'>
                <div className='sobre_mim-content'>
                    <div className='sobre_mim-content-header'>
                        <h2>Sobre Mim</h2>
                        <h3>Desenvolvedor Front-end</h3>
                    </div>
                    <div className='sobre_mim-content-description'>
                        <p>Em 2020 iniciei minha jornada em busca de ser um <span>Desenvolvedor Web / Programador</span>, fazendo o ensino médio integrado com o curso técnico. Durante o ensino médio continuei estudando por conta própria e me atualizando através de cursos, com o objetivo de me tornar um bom profissional na área.</p>
                        <p>Tive experiências incríveis enquanto estudava, desenvolvendo projetos na escola como o TCC focado em Robótica e Desenvolvimento Web.</p>
                        <p> Atualmente estou cursando <span>Engenharia da Computação</span> e atuo como <span>Shopify Developer</span> com foco na criação de temas altamente customizáveis e responsivos para lojas de e-commerce Shopify. Buscando de todas as formas com a minha capacidade, contribuir e atender as necessidades da empresa e dos clientes de onde estiver.</p>
                    </div>
                </div>
                <div className='formacao-content'>
                    <div className='formacao-content-header'>
                        <h3>Formação</h3>
                    </div>
                    <div className='formacao-content-description'>
                        <div className='formacao-block'>
                            <p>2023 - data atual | Bacharel <span>Engenharia da Computação</span></p>
                            <p>Centro Universitário Adventista de São Paulo UNASP</p>
                        </div>
                        <div className='formacao-block'>
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

export default SobreMim;