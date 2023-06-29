import "../styles/Button.css";

interface Props {
    text: String;
    link: string;
}

function Button (props: Props) {

    return (
        <a href={props.link}>
            <button className="button_button">
                <span>
                    {props.text}
                </span>
            </button>
        </a>
    );
}

export default Button;