import imgPlaceholder from '../../img/genre-menu/genre-menu-placeholder.png';

type GenreItemsProps = {
  title: string;
  image: string;
  link?: string;
};

const GenreItem = ({ title, image, link }: GenreItemsProps) => {
  return (
    <a href={link || '/'} className="genresMenu-item">
      <img
        src={image ? image : imgPlaceholder}
        alt={title}
        className="genresMenu-item__img group-hover:scale-[1.05] duration-300"
      />

      <div className="genresMenu-item__mask bg-mf-grey-dark opacity-0 group-hover:opacity-30 duration-300 w-full h-full absolute top-0 left-0" />

      <div className="genresMenu-item__text title-bg min-h-7 pl-2 py-1 flex flex-wrap">
        <h3 className="genresMenu-item__title basis-full text-mf-yellow text-sm">{title}</h3>
        <small className="genresMenu-item__subtitle text-mf-grey-light text-xs">354 items</small>
      </div>
    </a>
  );
};

export default GenreItem;
