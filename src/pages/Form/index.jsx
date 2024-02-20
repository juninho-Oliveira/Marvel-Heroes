import React, { useState } from 'react';
import './styles.css';
import Header from "../../components/Header";
import personagensData from '../../utils/herois';
import { useNavigate } from 'react-router-dom';




const FormPage = () => {
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [origem, setOrigem] = useState('');
  const [raca, setRaca] = useState('');
  const [url, setUrl] = useState('');
  const [tipo, setTipo] = useState('');

  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const personagem = {
      nome: nome,
      tipo: tipo,
      raca: raca,
      poderes: [origem],
      historia: descricao,
      idade: idade,
      altura: altura,
      imagem: url
    }
    personagensData.push(personagem)
  };

  const navigate = useNavigate()


  return (
    <section>
      <Header />
      <div className="detailsPage">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputnome" value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="altura" className="form-label">Altura</label>
            <input type="number" className="form-control" id="inputAltura" value={altura} onChange={e => setAltura(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputIdade" className="form-label">Idade</label>
            <input type="number" className="form-control" id="inputIdade" value={idade} onChange={e => setIdade(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputOrigem" className="form-label">Poderes</label>
            <input type="text" className="form-control" id="inputOrigem" value={origem} onChange={e => setOrigem(e.target.value)} placeholder='Ex: Magia, Intelecto Genial, Tecnologia Avançada' />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputRaça" className="form-label">Raça</label>
            <input type="text" className="form-control" id="inputRaça" value={raca} onChange={e => setRaca(e.target.value)} placeholder='Ex: Humano' />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputUrl" className="form-label">Url de uma imagem do personagem</label>
            <input type="text" className="form-control" id="inputUrl" value={url} onChange={e => setUrl(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputdescricao" className="form-label">Descrição</label>
            <textarea type="text" className="form-control" id="inputdescricao" value={descricao} onChange={e => setDescricao(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputTipo" className="form-label">Tipo</label>
            <select id="inputTipo" className="form-control" value={tipo} onChange={e => setTipo(e.target.value)}>
              <option selected>Escolha...</option>
              <option value="heroi">Herói</option>
              <option value="vilao">Vilão</option>
            </select>
          </div>


          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={() => navigate(-1)}>Enviar</button>{/*JR: achei mais facíl colocar essa função porque ela retorna para a página de cards*/}
            <button type="button" className="btn btn-primary"  onClick={() => navigate(-1)}>Voltar</button>
          </div>
        </form>
      </div>
    </section>
  );
};


export default FormPage;
