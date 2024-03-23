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

      <nav className="bg-gradient-to-r from-yellow-300 from-20% to-blue-600 to-80% text-white p-7 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand/logo */}
          <Link to="/" className="font-bold text-xl">
            <img src={logo} className="logo" alt="logos" />
          </Link>

          {/* Navigation links */}
          <ul className="flex space-x-4">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/members" className="hover:text-gray-300">
                Members
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
