import './Nav.css'; 
import logo from "/NW-Logo.png";
import {Link} from 'react-router-dom';
function Nav() {

    return (
      <>
      <nav>
            <ul>
                <Link to={`/`} className="Toolbar"><img src={logo} className="logo" alt="logos"/></Link>
                <li>
                    <Link to={`/`} className="Toolbar">Home</Link>
                </li>
                <li>
                    <Link to={`/About`} className="Toolbar">About</Link>
                </li>
                <li>
                    <Link to={`/Gallery`} className="Toolbar">Gallery</Link>
                </li>
                <li>
                    <Link to={`/Members`} className="About">Members</Link>
                </li>
            </ul>
        </nav>
        
      </>
    );
  }
  
  export default Nav;