import { FooterSocials } from './footer/FooterSocials';
import { Logo } from './header/Logo';
import { FooterSections } from './footer/FooterSections';

export const Footer = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = date.getDate() + '';
    const month = months[date.getMonth()] + '';
    const year = date.getFullYear() + '';

    return `${month} ${day} ${year}`;
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top bg-mf-red">
        <div className="container relative">
          <div className="footer-top__content flex items-start py-4 justify-start">
            <Logo />

            <FooterSections />

            <FooterSocials />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="footer-bottom__message text-white text-center py-2">
              Proudly developed by: Deni - {`${getCurrentDate()}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
