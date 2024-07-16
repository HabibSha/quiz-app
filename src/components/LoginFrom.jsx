import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="w-full bg-colorBlueLight p-8 rounded-md">
        <div className="mb-6 flex items-center relative">
          <input
            type="email"
            placeholder="Email"
            className="input-style"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-lg absolute right-[14px]">
            <MdEmail />
          </span>
        </div>
        <div className="mb-6 flex items-center relative">
          <input
            type="password"
            placeholder="Password"
            className="input-style"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password === "" && (
            <span className="text-lg absolute right-[14px]">
              <RiLockPasswordFill />
            </span>
          )}
        </div>
        <div className="mb-2">
          <button className="button-style">LOGIN</button>
        </div>
        <div>
          <p className="text-[14px]">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 underline hover:no-underline"
            >
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
