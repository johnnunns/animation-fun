import { Link, useLocation } from 'react-router';

interface SidebarRouteProps {
  image: string;
  linkTo: string;
  label: string;
}

const SidebarRoute = ({ image, linkTo, label }: SidebarRouteProps) => {
  const { pathname } = useLocation();
  const selected = linkTo === pathname;

  return (
    <div className="relative group flex items-center justify-center w-full">
      <div
        className={`absolute left-[-4px] h-2 w-2 bg-white rounded-full transition-all duration-300 ${
          selected ? 'h-8' : 'h-2 group-hover:h-4'
        }`}
      />

      <Link to={linkTo}>
        <div className="bg-white flex items-center justify-center rounded-xl">
          <img src={image} alt="Sidebar Route" className="rounded-xl w-10 h-10 object-cover" />
        </div>
      </Link>

      <div className="absolute left-full ml-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none z-50">
        <div className="bg-hover border-border border text-white font-bold px-3 py-1 rounded  whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
};

export default SidebarRoute;
