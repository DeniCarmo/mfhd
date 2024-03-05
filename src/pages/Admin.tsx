import { SideMenu } from '../components/admin/SideMenu';
import { Outlet } from 'react-router-dom';

export const Admin = () => {
  return (
    <main id="admin" className="admin flex flex-row justify-center">
      <div className="w-full max-w-52 bg-mf-grey-dark relative">
        <SideMenu />
      </div>

      <section className="flex flex-1">
        <Outlet />
      </section>
    </main>
  );
};
