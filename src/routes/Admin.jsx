import PropTypes from 'prop-types';
import { SideMenu } from '../components/admin/SideMenu';

export const Admin = ({ children }) => {
  return (
    <section id="admin" className="admin">
      <SideMenu />
      {children}
    </section>
  );
};

Admin.propTypes = {
  children: PropTypes.element,
};
