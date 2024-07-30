import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Star.css';

const Star = ({ selected, onClick, onMouseOver, onMouseOut }) => {
  console.log(selected);
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={`star ${selected ? 'selected' : 'unselected'}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default Star;
