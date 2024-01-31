import { socials } from '../../../data';
import { SocialIcons } from './SocialIcons';

export const Socials = () => {
  return (
    <ul className="header-socials">
      {socials.map((social) => {
        return (
          <li className="header-social__item" key={social.id}>
            <a href={social.link} className="header-social__link" target="_blank" rel="noreferrer">
              <SocialIcons name={social.image} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
