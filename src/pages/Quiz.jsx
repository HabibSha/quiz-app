import ProgressBar from "../components/ProgressBar";
import styles from "../styles";

const Quiz = () => {
  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h1>Question</h1>
        <p>Question can have multiple answers</p>
        <div>question select area</div>
        <div>
          <ProgressBar />
        </div>
      </article>
    </section>
  );
};

export default Quiz;
