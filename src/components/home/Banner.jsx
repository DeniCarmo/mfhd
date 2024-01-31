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
    <section className="home-banner">
      <Slider {...sliderSettings}>
        {bannersHome.map((banner) => {
          return (
            <a href={banner.link} className="home-banner__link" key={banner.id}>
              {window.innerWidth >= 760 ? (
                <img
                  src={banner.image.desktop ? banner.image.desktop : bannerPlaceholder}
                  alt={banner.alt}
                  className="home-banner__img"
                />
              ) : (
                <img
                  src={window.image.mobile ? banner.image.mobile : bannerPlaceholder}
                  alt={banner.alt}
                  className="home-banner__img"
                />
              )}
              <p className="home-banner__title">{banner.title}</p>
            </a>
          );
        })}
      </Slider>
    </section>
  );
};
