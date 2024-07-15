import jsDom from "../assets/jsDom.jpg";
import styles from "../styles";

const QuizList = () => {
  return (
    <>
      <section>
        <article className="p-3 shadow-sm rounded-md bg-white flex flex-col">
          <img src={jsDom} alt="JavaScript DOM" />
          <div className="mt-2 font-semibold flex flex-col">
            <h6 className="h6">
              JavaScript DOM Manipulation Quiz. You should try this.
            </h6>
            <div className={`${styles.flexBetween} text-gray-600 mt-3`}>
              <p>4 Questions</p>
              <p>Total points: 20</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default QuizList;
