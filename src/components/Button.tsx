import { Link } from "react-router-dom";
import "../styles/Button.css";

interface Props {
    text: String;
    link: string;
}

function Button (props: Props) {

    return (
        <Link to={props.link}>
            <button className="button_button">
                <span>
                    {props.text}
                </span>
            </button>
        </Link>
    );
}

export default Button;