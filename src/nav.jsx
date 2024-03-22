import "./Nav.css";
import logo from "../public/NW-Logo.png";
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

      <nav></nav>
    </>
  );
}

export default Nav;
