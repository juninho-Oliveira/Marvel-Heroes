import PropTypes from "prop-types";
import './styles.css';
import Title from "../../components/Title";
import Button from "../../components/Button";
import personagensData from "../../utils/herois";
import { useState, useEffect, useContext } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Filter from "../../components/Filter";

const HomePage = () => {
  const [personagens, setPersonagem] = useState(personagensData);

  const handleSearch = (data) => {
    search(data);
  }

  function search(param) {
    let data;
    if (param !== '') {
      data = personagensData.filter((item) => item.nome.toUpperCase() === param.toUpperCase());
      setPersonagem(data);
    } else {
      setPersonagem(personagensData);
    }
  }

  function filterPersonagem(tipo) {
    let data;
    if (tipo !== '') {
      data = personagensData.filter((item) => item.tipo === tipo);
      setPersonagem(data);
    } else {
      setPersonagem(personagensData);
    }
  }

  return (
    <section>
      <Header onHanderSearch={(data) => handleSearch(data)} />
      <Filter onIncrement={(tipo) => filterPersonagem(tipo)} personagens={personagens} />
      <div className="App-card">
        {personagens.map((personagem) =>
          <Card
            key={personagem.nome}
            personagem={personagem}
          />
        )}
      </div>
    </section>
  );
};

export default HomePage;
