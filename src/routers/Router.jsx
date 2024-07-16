import { Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
