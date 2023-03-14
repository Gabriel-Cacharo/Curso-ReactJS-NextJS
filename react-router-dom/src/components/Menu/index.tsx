import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" state={`This is state from About`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/post/10">Post 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
