import PropTypes from "prop-types";
import './styles.css';

const List = ({item}) => {
  return (
    <span className="item">{item}</span>
  );
};

export default List;
