import PropTypes from "prop-types";
import './styles.css';

const Image = ({src, alt}) => {
  return (
    <img src={src} alt={alt} className="imageCard" />
  );
};

export default Image;
