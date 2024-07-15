import QuizList from "../components/QuizList";
import styles from "../styles";

const Home = () => {
  return (
    <section>
      <article
        className={`${styles.flexBetween} ${styles.paddingY} ${styles.container} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}
      >
        <QuizList />
        <QuizList />
        <QuizList />
        <QuizList />
        <QuizList />
        <QuizList />
        <QuizList />
      </article>
    </section>
  );
};

export default Home;
