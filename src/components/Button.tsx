import { Link } from "react-router-dom";
import "../styles/Button.css";

interface Props {
    text: String;
    link: string;
}

function Button ({ text, link }:Props) {

    return (
        <Link to={link}>
            <button className="button_button">
                <span>
                    {text}
                </span>
            </button>
        </Link>
    );
}

export default Button;