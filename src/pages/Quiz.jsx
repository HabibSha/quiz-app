import ProgressBar from "../components/ProgressBar";
import styles from "../styles";

const Quiz = () => {
  return (
    <section>
      <article className={`${styles.container} ${styles.paddingY}`}>
        <h2>Title</h2>
        <p>instruction</p>
        <div>question select area</div>
        <div>
          <ProgressBar />
        </div>
      </article>
    </section>
  );
};

export default Quiz;
