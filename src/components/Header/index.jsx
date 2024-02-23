import './styles.css';

const Header = ({ onHanderSearch }) => {

  function getSearch() {
    const inputValue = document.getElementById('input-search');
    onHanderSearch(inputValue.value);
    inputValue.value = '';
  }

  return (
    <div className="App-header">

      <img className="icon" src={require('../../assets/icons/list.png')} />
      <img className="logo" src={require('../../assets/logo/logo.png')} />

      <div >
        <div className="input-group mb-3">
          <input id='input-search' type="text" className="form-control" placeholder="Homem de ferro" aria-label="Homem de ferro" aria-describedby="button-addon2" />
          <button onClick={getSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
        </div>
      </div>
      {/* <img className="icon" src={require('../../assets/icons/search.png')} /> */}
    </div>
  );
};

export default Header;
