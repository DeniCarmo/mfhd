import { Logo } from './header/Logo';
import { Socials } from './header/Socials';
import { Search } from './search/Search';

export const Header = () => {
  return (
    <header id="header" className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto bg-mf-red px-4 py-2">
        <div className="container relative flex flex-wrap">
          <Logo />

          <Socials />

          <nav className="w-full h-auto border-t border-white py-2"></nav>
        </div>
      </div>

      <div className="w-full h-auto bg-mf-grey-dark px-4 py-2">
        <div className="container flex items-center justify-center">
          <Search />
        </div>
      </div>
    </header>
  );
};
