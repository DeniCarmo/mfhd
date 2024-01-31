import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export const SideMenu = () => {
  return (
    <aside className="sideMenu">
      <ul className="sideMenu-list">
        <li className="sideMenu-list__item">
          <p className="sideMenu-list__title">
            <span>Footer</span>
            <i>
              <KeyboardArrowDownOutlinedIcon />
            </i>
          </p>
          <ul className="sideMenu-options">
            <li className="sideMenu-option">
              <a href="/admin/footer/add-sections" className="sideMenu-link">
                Add Sections
              </a>
            </li>
            <li className="sideMenu-option">
              <a href="/admin/footer/edit-sections" className="sideMenu-link">
                Edit Sections
              </a>
            </li>
          </ul>
          <ul className="sideMenu-options">
            <li className="sideMenu-option">
              <a href="/admin/footer/add-socials" className="sideMenu-link">
                Add Socials
              </a>
            </li>
            <li className="sideMenu-option">
              <a href="/admin/footer/edit-socials" className="sideMenu-link">
                Edit Socials
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
