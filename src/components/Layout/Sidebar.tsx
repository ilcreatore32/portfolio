import React from "react";

const Sidebar = () => {
  return (
    <div className="item hidden sm:w-32 sm:block md:w-52 md:h-screen md:block">
      <div className="flex flex-col items-center p-4 h-full border-indigo-900 border bg-indigo-900">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="avatar"
        />
        <div className="flex-1">
          <p className="text-white font-bold">
            <span className="text-xs">Weishler Berman</span>
            <br />
            <span className="text-xs text-green-400">@ilcreatore32</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
