import { Banner } from '../components/home/Banner';
import SubBanner from '../components/home/SubBanners';
import GenresMenu from '../components/home/GenresMenu';

export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="container">
        <div className="row">
          <SubBanner />

          <GenresMenu />
        </div>
      </div>
    </div>
  );
};
