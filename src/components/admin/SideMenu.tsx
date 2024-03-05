import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const SideMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <aside className="sticky top-0 sideMenu w-52 bg-mf-grey-dark pl-3 py-4">
      <ul>
        <li>
          <p
            className="flex flex-row justify-between items-center cursor-pointer pr-2"
            onClick={handleMenuToggle}
          >
            <span className="text-xl font-bold text-mf-white">Footer</span>
            <i className={`transition duration-300 ${menuToggle ? 'rotate-180' : 'rotate-0'}`}>
              <FaChevronDown style={{ color: '#ffffff' }} />
            </i>
          </p>
          <ul
            className={`overflow-hidden transition-max-height duration-300 h-auto ${
              menuToggle ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <li>
              <a href="/admin/footer/add-sections" className="sideMenu-link text-sm text-mf-white">
                Add Sections
              </a>
            </li>
            <li>
              <a href="/admin/footer/edit-sections" className="sideMenu-link text-sm text-mf-white">
                Edit Sections
              </a>
            </li>
            <li>
              <a href="/admin/footer/add-socials" className="sideMenu-link text-sm text-mf-white">
                Add Socials
              </a>
            </li>
            <li>
              <a href="/admin/footer/edit-socials" className="sideMenu-link text-sm text-mf-white">
                Edit Socials
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
