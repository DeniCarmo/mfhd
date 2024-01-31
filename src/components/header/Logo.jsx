import logo from '../../img/logo.svg';

export const Logo = () => {
  return (
    <a href="/" className="header-logo">
      <img src={logo} alt="There's always something to watch" />
    </a>
  );
};
