import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative bg-slate-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
