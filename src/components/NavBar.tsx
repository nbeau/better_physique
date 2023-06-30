import { Link, NavLink } from 'react-router-dom';
import "../styles/NavBar.css"
import logo from "../images/logo.png";

function NavBar() {
    return (
        <nav className="nav_nav navbar fixed-top ">
            <div className="container-fluid">
                <ul className="navbar-nav flex-row nav_ul">
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/training">Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dieting">Dieting</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/analysis">Analysis</NavLink>
                    </li>
                </ul>
                <Link to="/">
                    <img src={logo} className="nav_logo"></img>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;