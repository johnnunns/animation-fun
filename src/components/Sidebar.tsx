import SidebarRoute from './SidebarRoute';
import Home from '../images/home.png';
import Discord from '../images/discord_link_logo.png';

const Sidebar = () => {
  return (
    <div className="bg-sidebar min-h-dvh min-w-[70px] flex flex-col items-center gap-3 py-5">
      <SidebarRoute image={Home} linkTo="/" label="Home" />
      <SidebarRoute image={Discord} linkTo="/discord" label="Discord" />
    </div>
  );
};

export default Sidebar;
