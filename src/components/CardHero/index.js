import './styles.css';
import List from "../List";
import { useNavigate } from "react-router-dom";

const CardHero = ({ personagem }) => {
  const navigate = useNavigate();
  const { nome, imagem, tipo, altura, idade, raca, historia, poderes} = personagem;

  const backgroundImage = {
    background: `url(${imagem})  no-repeat`,
  }

  const onClickButton = () => {
    navigate('/details', { state: { personagem: personagem } })
  }

  const botaoExcluir = () => {
    /*//e.stopPropagation();
    removerPersonagem(personagem.id);
    navigate(-1);*/

    alert(personagem.nome)
  }


  return (
    <div className="card-hero" style={backgroundImage} onClick={onClickButton}>
      {/* <Title title={nome} /> */}
      {/* <Image src={imagem} alt={nome}/> */}
      <div className="card-hero-content">
        <div className="card-back-area">
          <button className='botaoCard' onClick={() => navigate(-1)}>{/*JR: alteirei essa parte porque quando clicava no botão ele recaregava a página ao voltar*/}
            <img className="back" src={require('../../assets/icons/arrow.png')} />
          </button>

          <button className='botaExcluir' onClick={botaoExcluir}>X</button>

        </div>
        <div className="card-title-area">
          <span className="subtitleDetails">{tipo}</span>
          <h1 className='titleHeroDetails'>{nome}</h1>
        </div>
        <div className="card-title-details">
          <div className="group-detail">
            <img style={{ width: '17px' }} className="details-icon" src={require('../../assets/icons/idade.png')} />
            <span className="details-text">{idade} anos</span>
          </div>
          <div className="group-detail">
            <img className="details-icon" src={require('../../assets/icons/altura.png')} />
            <span className="details-text" style={{ marginTop: '17%' }}>{altura}m</span>
          </div>
          <div className="group-detail">
            <img className="details-icon" src={require('../../assets/icons/raca.png')} />
            <span className="details-text">{raca}</span>
          </div>
        </div>
        <div className="card-description">
          <span className="description-text">{historia}</span>
        </div>
      </div>
      <div className="card-hero-skills">
        <div className="card-skills">
          <h3 className='skillsHeroDetails'>Habilidades</h3>
          <div className='group-skills'>
            {poderes.map((poder) =>
              <List
                key={poder}
                item={poder}
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardHero;

