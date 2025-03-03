import { Component } from "react";
import "./Navbar.css";
//import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> TrippyLanka </h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index)=>{
            return(
                <li key={index}>
                    <a href="/">
                        <i className= {item.icon}></i>
                    </a> 
                    {item.title}
                </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
