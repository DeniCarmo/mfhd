import PropTypes from 'prop-types';

export const FooterListItem = ({ isTitle, title, text, link }) => {
  return (
    <li className={`footer-item__list-item${isTitle ? ' footer-title' : ''}`}>
      {isTitle ? (
        <span>{title}</span>
      ) : (
        <a href={link} className="footer-item__link">
          {text}
        </a>
      )}
    </li>
  );
};

FooterListItem.propTypes = {
  isTitle: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
