import { subBanners } from '../../../data';
import bannerPlacebolhder from '../../img/subBanners/sub-banner-placeholder.png';

const SubBanner = () => {
  return (
    <section className="subBanner flex flex-wrap items-start justify-center gap-4 mt-10">
      {subBanners.map((banner) => {
        return (
          <a
            href={banner.link}
            className="subBanner-item relative group overflow-hidden rounded-md border border-mf-grey-light"
            key={banner.id}
          >
            <img
              src={banner.image ? banner.image : bannerPlacebolhder}
              alt={banner.title}
              className="subBanner-item__img group-hover:scale-[1.05] duration-300"
            />
            <div className="subBanner-item__mask bg-mf-grey-dark opacity-0 group-hover:opacity-30 duration-300 w-full h-full absolute top-0 left-0" />

            <div className="subBanner-item__text title-bg min-h-8 pl-2 py-1">
              <h3 className="subBanner-item__title text-mf-yellow text-sm basis-full">
                {banner.title}
              </h3>
              <small className="subBanner-item__subtitle text-slate-300 text-xs">
                159 {banner.title}
              </small>
            </div>
          </a>
        );
      })}
    </section>
  );
};
export default SubBanner;
