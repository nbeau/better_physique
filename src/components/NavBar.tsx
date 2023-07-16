import { Link, NavLink } from 'react-router-dom';
import "../styles/NavBar.css"
import logo from "../images/logo.png";
import Search from './Search';
import Language from './Language';

interface Props {
    lang: string;
    setLang: Function;
}

function NavBar({ lang, setLang }:Props) {
    return (
        <nav className="nav_nav navbar fixed-top ">
            <div className="container-fluid">
                <div className="col-auto">
                    <ul className="navbar-nav flex-row nav_ul gx-3">
                        <li className="nav-item">
                            <NavLink to="/">{lang === "english" ? "Home" : "Foyer"}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/training">{lang === "english" ? "Training" : "Entrainement"}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dieting">{lang === "english" ? "Dieting" : "Régime"}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact">{lang === "english" ? "Contact Us" : "Contact"}</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex flex-row justify-content-center">
                    <Search lang={lang} />
                </div>
                <div className="col-auto nav_language">
                    <Language lang={lang} setLang={setLang} />
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