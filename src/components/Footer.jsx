import { FooterSocials } from './footer/FooterSocials';
import { Logo } from './header/Logo';
import getFooter from '../requests/footer/getFooter';
import { useEffect, useState } from 'react';
import { FooterListItem } from './footer/FooterListItem';

export const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [sections, setSections] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    getFooter().then((data) => {
      setFooterData(data);
    });
  }, []);

  useEffect(() => {
    if (footerData) {
      setSections(footerData.filter((item) => item._id === 'sections')[0].sections);
      setSocials(footerData.filter((item) => item._id === 'socials')[0].socials);
    }
  }, [footerData]);

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
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-top__content">
              <Logo />

              <div className="footer-top--wrapper">
                {sections &&
                  sections.map((section) => (
                    <ul className="footer-item__list" key={section._id}>
                      <FooterListItem title={section.title} isTitle />

                      {section.items.map((item, i) => {
                        return <FooterListItem text={item.title} link={item.link} key={i} />;
                      })}
                    </ul>
                  ))}
              </div>

              {socials && <FooterSocials socials={socials} />}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="footer-bottom__message">
              Proudly developed by: Deni - {`${getCurrentDate()}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
