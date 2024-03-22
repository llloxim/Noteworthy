import "./Nav.css";
import logo from "/public/NW-Logo-removebg-preview.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      {/* <nav>
        <ul className="Nav">
          <Link to={`/`} className="Toolbar">
            <img src={logo} className="logo" alt="logos" />
          </Link>
          <li className="link">
            <Link to={`/`} className="Toolbar">
              Home
            </Link>
          </li>
          <li className="link">
            <Link to={`/About`} className="Toolbar">
              About
            </Link>
          </li>
          <li className="link">
            <Link to={`/Gallery`} className="Toolbar">
              Gallery
            </Link>
          </li>
          <li className="link">
            <Link to={`/Members`} className="About">
              Members
            </Link>
          </li>
        </ul>
      </nav> */}

      <nav class="bg-white border-gray-200 dark:bg-gray-900">HELLO</nav>
    </>
  );
}

export default Nav;
