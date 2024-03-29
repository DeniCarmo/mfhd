import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { bannersHome } from '../../../data';
import bannerPlaceholder from '../../img/home/banner-placeholder.png';

export const Banner = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="home-banner container max-w-[1920px]">
      <Slider {...sliderSettings}>
        {bannersHome.map((banner) => {
          return (
            <a href={banner.link} className="home-banner__link relative" key={banner.id}>
              {window.innerWidth >= 760 ? (
                <img
                  src={banner.image.desktop ? banner.image.desktop : bannerPlaceholder}
                  alt={banner.alt}
                  className="home-banner__img"
                />
              ) : (
                <img
                  src={banner.image.mobile ? banner.image.mobile : bannerPlaceholder}
                  alt={banner.alt}
                  className="home-banner__img"
                />
              )}
              <div className="home-banner__title title-bg min-h-11 pl-4">
                <h3 className="text-mf-yellow text-3xl">{banner.title}</h3>
              </div>
            </a>
          );
        })}
      </Slider>
    </section>
  );
};
