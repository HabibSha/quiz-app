import { useState } from "react";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import login from "../assets/login.svg";
import styles from "../styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h2 className="h2 font-bold mb-10">Login to Play Quiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          <div className="hidden md:block">
            <img src={login} alt="Login Hero Image" className="w-[80%]" />
          </div>
          <div className="flex items-center justify-center">
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
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
