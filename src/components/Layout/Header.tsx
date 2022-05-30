// Heroicons
import { MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="flex-1 p-4 w-full h-16 border-indigo-900 border-b bg-slate-800 text-gray-200">
      <div className="flex flex-row justify-between">
        <span className="text-lg font-medium">My Portfolio</span>
        <MenuIcon className="w-8 h-8 text-slate-200 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
