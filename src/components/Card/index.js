import Title from "../Title";
import './styles.css';
import Subtitle from "../Subtitle";
import { useNavigate } from "react-router-dom";


const Card = ({ personagem, funcaoDoPai }) => {
  const navigate = useNavigate();
  const { nome, imagem, tipo } = personagem;

  const backgroundImage = {
    background: `url(${imagem})  no-repeat`,
  }

  const onClickButton = () => {
    navigate('/details', { state: { personagem: personagem } })
  }




  return (
    <div className="container-cards">

      <div className="cardHome" style={backgroundImage} onClick={onClickButton}>
        <div className="card-content">
          <Subtitle subtitle={tipo} />
          <Title title={nome} />
        </div>
      </div>
      <button className='botaExcluir' onClick={funcaoDoPai}>X</button>
    </div>
  );
};

export default Card;

