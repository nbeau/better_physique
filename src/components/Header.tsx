import "../styles/Header.css";
import Breadcrumbs from "../components/Breadcrumbs";

interface Props {
    heading: String;
    lang: string;
}

function Header({ heading, lang }:Props) {

    return (
        <header className="header_header">
            <Breadcrumbs lang={lang} />
            <h1>{heading}</h1>
                <svg className="header_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0 100,100 100,100 50"/>
                </svg>
            
        </header>
    );
}

export default Header;