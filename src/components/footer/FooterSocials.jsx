import PropTypes from 'prop-types';
import { FooterSocialItem } from './FooterSocialItem';

export const FooterSocials = ({ socials }) => {
  return (
    <ul className="footer-socials">
      {socials.map((social) => {
        return <FooterSocialItem name={social.title} link={social.link} key={social._id} />;
      })}
    </ul>
  );
};

FooterSocials.propTypes = {
  socials: PropTypes.array,
};
