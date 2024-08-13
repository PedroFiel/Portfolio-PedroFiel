import "./style.css";

function CardProjeto({ projeto }) {
    return (
      <div className="card-project">
        <div className="card-content">
          <div className="card-header">
            <h2>{projeto.nome}</h2>
            <p>{projeto.text_techs}</p>
          </div>
          <div className="card-technologies">
            {projeto.techs.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="card-description">
            <p>{projeto.descricao}</p>
          </div>
        </div>
        <div className="card-buttons">
          {projeto.card_buttons.map(button => (
            <a key={button.id} href={button.link} target="_blank"><p>{button.text}</p></a>
          ))}
        </div>
      </div>
    );
  }

export default CardProjeto;