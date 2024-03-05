import { FaFacebook, FaShare, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { NewSocialsType } from '../../types/socials';

export const FooterSocialItem = ({ title, link }: NewSocialsType) => {
  switch (title) {
    case 'facebook':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FaFacebook style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'x':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FaTwitter style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'telegram':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FaTelegram style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'share':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FaShare style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'whatsapp':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FaWhatsapp style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
  }
};
