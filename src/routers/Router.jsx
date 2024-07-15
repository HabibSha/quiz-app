import { Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
