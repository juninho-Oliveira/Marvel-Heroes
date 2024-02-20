import './styles.css';
import Title from "../../components/Title";
import CardHero from "../../components/CardHero";
import Header from "../../components/Header";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const FormPage = () => {
  const location = useLocation();

  return (

    <section>
      <Header />
      <div className="detailsPage">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputnome" />
          </div>
          <div className="col-md-6">
            <label htmlFor="altura" className="form-label">Altura</label>
            <input type="number" className="form-control" id="inputAltura" />
          </div>
          <div className="col-12">
            <label htmlFor="inputIdade" className="form-label">Idade</label>
            <input type="number" className="form-control" id="inputIdade"  />
          </div>
          <div className="col-12">
            <label htmlFor="inputOrigem" className="form-label">Origem</label>
            <input type="text" className="form-control" id="inputOrigem"  />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputRaça" className="form-label">Raça</label>
            <input type="text" className="form-control" id="inputRaça" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputUrl" className="form-label">Url de uma imagem do personal</label>
            <input type="text" className="form-control" id="inputUrl" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputUrl" className="form-label">Descrição</label>
            <textarea type="text" className="form-control" id="inputUrl" />
          </div>


          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Heroi
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Vilão
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="submit" className="btn btn-primary">Voltar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
