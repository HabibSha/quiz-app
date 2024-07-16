import { useState } from "react";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import signup from "../assets/signup.svg";
import styles from "../styles";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h2 className="h2 font-bold mb-10">SignUp to Play Quiz</h2>
        <div className="grid grid-cols-2 md:gap-12">
          <div className="">
            <img src={signup} alt="SignUp Hero Image" className="w-full" />
          </div>
          <div className="flex items-center justify-center">
            <form className="w-full bg-colorBlueLight p-8 rounded-md">
              <div className="mb-6 flex items-center relative">
                <input
                  type="text"
                  placeholder="Username"
                  className="input-style"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <span className="text-lg absolute right-[14px]">
                  <FaUser className="" />
                </span>
              </div>
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
              <div className="mb-6 flex items-center relative">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input-style"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword === "" && (
                  <span className="text-lg absolute right-[14px]">
                    <RiLockPasswordLine />
                  </span>
                )}
              </div>
              <label className="flex items-center space-x-2 mb-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 cursor-pointer text-blue-600"
                />
                <span className="text-gray-500 text-[15px]">
                  I agree to the terms & conditions
                </span>
              </label>
              <div className="mb-2">
                <button className="button-style">SIGN UP</button>
              </div>
              <div>
                <p className="text-[14px]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 underline hover:no-underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SignUp;
