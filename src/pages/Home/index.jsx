import PropTypes from "prop-types";
import './styles.css';
import Title from "../../components/Title";
import Button from "../../components/Button";
import personagensData from "../../utils/herois";
import { useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Filter from "../../components/Filter";

const HomePage = () => {
  const [personagens, setPersonagem] = useState(personagensData);
  const [novosPersonagens, setNovosPersonagens] = useState(personagensData);

  const excluirPersonagem = (nome) => {
    const novos = personagens.filter(personagem => personagem.nome !== nome);
    setNovosPersonagens(novos);
    setPersonagem(novos);
    alert(`Personagem ${nome} excluído!`);
    console.log(novos)
  }

  function filterPersonagem(tipo) {
    let data;
    if (tipo !== '') {
      data = novosPersonagens.filter((item) => item.tipo === tipo);
      setPersonagem(data);
    } else {
      setPersonagem(novosPersonagens);
    }
  }

  return (
    <section>
      <Header />
      <Filter onIncrement={(tipo) => filterPersonagem(tipo)} personagens={personagens} />
      <div className="App-card">
        {personagens.map((personagem) =>
          <Card
            key={personagem.nome}
            personagem={personagem}
            funcaoDoPai={() => excluirPersonagem(personagem.nome)}
          />
        )}
      </div>
    </section>
  );
};

export default HomePage;