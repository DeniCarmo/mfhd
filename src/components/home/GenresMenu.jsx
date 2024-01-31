import GenreItem from './GenreItem';
import { genres } from '../../../data';

const CategoriesMenu = () => {
  return (
    <section className="genresMenu">
      <h2 className="genresMenu-title">View by Genre</h2>
      <div className="container">
        <div className="row">
          <ul className="genresMenu-list col-12">
            {genres.map((genre) => {
              return (
                <li className="genresMenu-list__item" key={genre.id}>
                  <GenreItem title={genre.title} image={genre.image} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default CategoriesMenu;
