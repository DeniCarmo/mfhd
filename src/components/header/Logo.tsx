import logo from '../../img/logo.svg';

export const Logo = () => {
  return (
    <a href="/" className="w-full max-w-44 flex">
      <img src={logo} alt="There's always something to watch" />
    </a>
  );
};
