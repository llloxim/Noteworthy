import "./Nav.css";
import logo from "/public/NW-Logo-removebg-preview.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="bg-gradient-to-r from-yellow-300 from-20% to-blue-600 to-80% text-white p-7">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">
            <img src={logo} className="logo" alt="logos" />
          </Link>

          <ul className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/members" className="hover:text-gray-300">
                Members
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/hire-us" className="hover:text-gray-300">
                Hire Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
