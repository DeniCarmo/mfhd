import { FaFacebook, FaShare, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

type SocialIconsProps = {
  name: string;
};

export const SocialIcons = ({ name }: SocialIconsProps) => {
  switch (name) {
    case 'facebook':
      return <FaFacebook className="header-social__icon" style={{ color: '#ffffff' }} />;
    case 'x':
      return <FaTwitter className="header-social__icon" style={{ color: '#ffffff' }} />;
    case 'telegram':
      return <FaTelegram className="header-social__icon" style={{ color: '#ffffff' }} />;
    case 'whatsapp':
      return <FaWhatsapp className="header-social__icon" style={{ color: '#ffffff' }} />;
    default:
      return <FaShare className="header-social__icon" style={{ color: '#ffffff' }} />;
  }
};
