import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative h-screen bg-slate-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
