import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShareIcon from '@mui/icons-material/Share';
import Whatsapp from '@mui/icons-material/WhatsApp';
import PropTypes from 'prop-types';

export const FooterSocialItem = ({ name, link }) => {
  switch (name) {
    case 'facebook':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <FacebookOutlinedIcon style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'x':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <XIcon style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'telegram':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <TelegramIcon style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'share':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <ShareIcon style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
    case 'whatsapp':
      return (
        <li className="footer-socials__item">
          <a href={link} className="footer-socials__link" target="_blank" rel="noreferrer">
            <Whatsapp style={{ color: '#FFFFFF' }} />
          </a>
        </li>
      );
  }
};

FooterSocialItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};
