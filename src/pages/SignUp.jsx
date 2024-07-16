import signup from "../assets/signup.svg";
import SignupForm from "../components/SignupForm";
import styles from "../styles";

const SignUp = () => {
  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h2 className="h2 font-bold mb-10">SignUp to Play Quiz</h2>
        <div className="grid grid-cols-2 md:gap-12">
          <div className="">
            <img src={signup} alt="SignUp Hero Image" className="" />
          </div>
          <div className="flex items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </article>
    </section>
  );
};

export default SignUp;
