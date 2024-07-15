import signup from "../assets/signup.svg";
import SignupForm from "../components/SignupForm";
import styles from "../styles";

const SignUp = () => {
  return (
    <section>
      <article
        className={`${styles.container} ${styles.paddingY} grid grid-cols-2 md:gap-12`}
      >
        <div className="">
          <img src={signup} alt="SignUp Hero Image" className="" />
        </div>
        <div className="">
          <SignupForm />
        </div>
      </article>
    </section>
  );
};

export default SignUp;
