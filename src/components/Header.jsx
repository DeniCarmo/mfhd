import { Logo } from './header/Logo';
import { Socials } from './header/Socials';
import { Search } from './search/Search';

export const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Logo />
            </div>

            <div className="col-12 col-lg-9">
              <nav className="header-nav"></nav>
            </div>
          </div>
          <Socials />
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
