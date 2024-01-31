import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from 'prop-types';

export const SocialIcons = ({ name }) => {
  switch (name) {
    case 'facebook':
      return <FacebookOutlinedIcon className="header-social__icon" style={{ color: '#ffffff' }} />;
    case 'x':
      return <XIcon className="header-social__icon" style={{ color: '#ffffff' }} />;
    case 'telegram':
      return <TelegramIcon className="header-social__icon" style={{ color: '#ffffff' }} />;
    default:
      return <ShareIcon className="header-social__icon" style={{ color: '#ffffff' }} />;
  }
};

SocialIcons.propTypes = {
  name: PropTypes.string,
};
