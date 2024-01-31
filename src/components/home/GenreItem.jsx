import PropTypes from 'prop-types';
import imgPlaceholder from '../../img/genre-menu/genre-menu-placeholder.png';

const GenreItem = ({ title, image }) => {
  return (
    <div className="genresMenu-item">
      <img src={image ? image : imgPlaceholder} alt={title} className="genresMenu-item__img" />
      <div className="genresMenu-item__mask"></div>
      <div className="genresMenu-item__text">
        <h3 className="genresMenu-item__title">{title}</h3>
        <small className="genresMenu-item__subtitle">354 items</small>
      </div>
    </div>
  );
};

GenreItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
export default GenreItem;
