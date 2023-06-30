import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"
import logo from "../images/logo.png";

function NavBar() {
    return (
        <nav className="nav_nav navbar fixed-top ">
            <div className="container-fluid">
                <ul className="navbar-nav flex-row nav_ul">
                    <li className="nav-item">
                        <NavLink to="/better">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/better/Training">Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/better/Dieting">Dieting</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/better/Analysis">Analysis</NavLink>
                    </li>
                </ul>
                <a href="/">
                    <img src={logo} className="nav_logo"></img>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;