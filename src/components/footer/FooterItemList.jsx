import PropTypes from 'prop-types';
import { FooterListItem } from './FooterListItem';

export const FooterItemList = ({ sections }) => {
  if (sections) {
    sections.map((section) => {
      const { title, items } = section;
      return (
        <ul className="footer-item__list" key={section._id}>
          <FooterListItem title={title} isTitle />

          {items.map((item, i) => {
            return <FooterListItem text={item.title} link={item.link} key={i} />;
          })}
        </ul>
      );
    });
  }
};

FooterItemList.propTypes = {
  sections: PropTypes.array,
};
