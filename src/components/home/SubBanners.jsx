import { subBanners } from '../../../data';
import bannerPlacebolhder from '../../img/subBanners/sub-banner-placeholder.png';

const SubBanner = () => {
  return (
    <section className="subBanner">
      {subBanners.map((banner) => {
        return (
          <a href={banner.link} className="subBanner-item" key={banner.id}>
            <img
              src={banner.image ? banner.image : bannerPlacebolhder}
              alt={banner.title}
              className="subBanner-item__img"
            />
            <div className="subBanner-item__mask"></div>
            <div className="subBanner-item__text">
              <h3 className="subBanner-item__title">{banner.title}</h3>
              <small className="subBanner-item__subtitle">159 {banner.title}</small>
            </div>
          </a>
        );
      })}
    </section>
  );
};
export default SubBanner;
