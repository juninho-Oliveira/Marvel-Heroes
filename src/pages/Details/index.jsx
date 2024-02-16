import './styles.css';
import Title from "../../components/Title";
import CardHero from "../../components/CardHero";
import Header from "../../components/Header";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DetailsPage = () => {
  const location = useLocation();
  const personagem = location.state.personagem;
  useEffect(() => window.scrollTo({ top:0, behavior: "smooth" }), []);
  return (

    <section>
      <Header />
      <div className="detailsPage">
        <CardHero
          key={personagem.nome}
          personagem={personagem}
        />
      </div>
    </section>
  );
};

export default DetailsPage;
