import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> TrippyLanka </h1>
        <ul className="nav-menu">
          <li>
            <Link>
              <i class="fa-solid fa-house"> </i>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
