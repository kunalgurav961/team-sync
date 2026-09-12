
import {Outlet } from "react-router";


import AsideNav from "../../shared/ui/AsideNav";
import TopNav from "../../shared/ui/TopNav";

const DashboradLayout = () => {
  

  return (
    <div className="dashboard-shell grid min-h-screen grid-cols-[188px_1fr]">
      <AsideNav />
      <main className="min-w-0">
        <TopNav />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboradLayout;
