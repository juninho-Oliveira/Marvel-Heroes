import PropTypes from "prop-types";
import './styles.css';
import { useNavigate } from "react-router-dom";

const Button = ({ button, data }) => {
  const navigate = useNavigate();

  const onClickButton = () => {
    console.log(data);
    navigate('/details', {state: {personagem: data}})
  }

  return (
    <button type="button" className="button" onClick={onClickButton}>{button}</button>
  );
};

export default Button;
