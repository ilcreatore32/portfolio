// React-Router
import { Link } from "react-router-dom";

// Heroicons
import { UserIcon, BriefcaseIcon} from '@heroicons/react/solid';

const Sidebar = () => {
  return (
    <div className="item hidden sm:w-32 sm:block md:w-52 md:h-screen md:block transition-all">
      <div className="flex flex-col items-center p-4 h-full border-indigo-900 border bg-indigo-900">
        <div>
          <div className="text-center">
            <img
              src="https://avatars.githubusercontent.com/u/52388760?v=4"
              className="rounded-full w-16 h-16 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-white font-medium leading-tight mb-1 text-xs sm:text-sm md:text-md">
              Weishler Berman
            </h5>
            <p className="text-green-300 text-xs sm:text-sm md:text-md">
              Frontend developer
            </p>
          </div>
          <div className="flex flex-col w-auto h-full py-5 gap-3">
            <Link
              className="flex flex-col gap-1 items-center justify-center md:flex-row md:justify-start"
              to="/portfolio/about"
            >
              <div className="flex items-center p-2 bg-indigo-800 rounded-full">
                <UserIcon className="text-slate-300 h-5 w-5" />
              </div>
              <span className="text-white text-xs sm:text-sm md:text-md">
                About me
              </span>
            </Link>
            <Link
              className="flex flex-col gap-1 items-center justify-center md:flex-row md:justify-start"
              to="/portfolio"
            >
              <div className="flex items-center p-2 bg-indigo-800 rounded-full">
                <BriefcaseIcon className="text-slate-300 h-5 w-5" />
              </div>
              <span className="text-white text-xs sm:text-sm md:text-md">
                Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
