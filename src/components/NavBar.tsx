import { Link, NavLink } from 'react-router-dom';
import "../styles/NavBar.css"
import logo from "../images/logo.png";
import Search from './Search';

function NavBar() {
    return (
        <nav className="nav_nav navbar fixed-top ">
            <div className="container-fluid">
                <div className="col-auto">
                    <ul className="navbar-nav flex-row nav_ul gx-3">
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
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex flex-row justify-content-center">
                    <Search />
                </div>
                <div className="col-auto">
                    <Link to="/">
                        <img src={logo} className="nav_logo"></img>
                    </Link>
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;