import login from "../assets/login.svg";
import LoginForm from "../components/LoginFrom";
import styles from "../styles";

const Login = () => {
  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h2 className="h2 font-bold mb-10">Login to Play Quiz</h2>
        <div className="grid grid-cols-2 md:gap-12">
          <div className="">
            <img src={login} alt="Login Hero Image" className="w-[80%]" />
          </div>
          <div className="flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
