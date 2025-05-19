import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <main className="flex gap-1">
      <Sidebar />
      <div className="p-8 w-full max-w-[1200px] mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
