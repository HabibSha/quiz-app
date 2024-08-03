import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";
import styles from "../styles";

const Quiz = () => {
  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY} relative`}>
        <h1 className="h3 font-medium">Question</h1>
        <h6 className="h6 text-slate-500 py-1">
          Question can have multiple answers
        </h6>
        <div className="border-t-[1px] py-6">
          <Answers />
          <ProgressBar />
        </div>
      </article>
    </section>
  );
};

export default Quiz;
