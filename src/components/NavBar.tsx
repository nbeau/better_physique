import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"

function NavBar() {
    return (
        <nav className="nav_nav navbar fixed-top ">
            <div className="container-fluid">
                <ul className="navbar-nav flex-row nav_ul">
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Training">Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Dieting">Dieting</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;