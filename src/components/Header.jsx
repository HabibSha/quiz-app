import { NavLink } from "react-router-dom";
import styles from "../styles";

const Header = () => {
  return (
    <>
      <section className="bg-white shadow-lg">
        <article className={`${styles.flexBetween} ${styles.container} py-4`}>
          <p className="text-[20px] sm:text-[22px] font-[500]">LaQuiz</p>
          <nav>
            <ul
              className={`${styles.flexCenter} gap-1 text-[15px] sm:text-[17px] text-blue-800`}
            >
              <NavLink
                to="signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-800 font-semibold"
                    : "hover:text-violet-700"
                }
              >
                Signup
              </NavLink>
              <span className="text-black">/</span>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive
                    ? "text-violet-800 font-semibold"
                    : "hover:text-violet-700"
                }
              >
                Login
              </NavLink>
            </ul>
          </nav>
        </article>
      </section>
    </>
  );
};

export default Header;
