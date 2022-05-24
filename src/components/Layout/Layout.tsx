import React from "react";

// Layout Components
import Sidebar from "./Sidebar";
import Header from "./Header";

type layoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: layoutProps): JSX.Element => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="item w-full h-full">
          <Header />
          <main className="p-4 pb-16 mx-auto text-white overflow-auto h-screen">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
