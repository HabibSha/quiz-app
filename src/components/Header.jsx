import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <p>LaQuiz</p>
      </Link>
      <nav>
        <ul>
          <li>hello</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
