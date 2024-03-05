import GenreItem from './GenreItem';
import { genres } from '../../../data';

const CategoriesMenu = () => {
  return (
    <section className="genresMenu">
      <h2 className="genresMenu-title text-3xl text-center text-mf-white my-10 uppercase font-bold">
        View by Genre
      </h2>

      <div className="container">
        <ul className="genresMenu-list flex flex-wrap items-start justify-center gap-3 mb-10">
          {genres.map((genre) => {
            return (
              <li
                className="genresMenu-list__item relative group rounded-md border border-mf-orange overflow-hidden"
                key={genre.id}
              >
                <GenreItem title={genre.title} image={genre.image} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default CategoriesMenu;
