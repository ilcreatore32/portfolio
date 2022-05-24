import React from "react";

type layoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: layoutProps): JSX.Element => {
  return (
    <>
      <div className="flex h-screen">
        <div className="item hidden sm:w-32 sm:block md:w-52 md:h-screen md:block">
          <div className="flex flex-col items-center p-4 h-full bg-indigo-800">
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
        <div className="item w-full h-full">
          <header className="flex-1 p-4 w-full bg-indigo-300">
            <span className="text-lg font-medium">
              My Portfolio
            </span>
          </header>
          <main className="p-4 mx-auto text-white">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
