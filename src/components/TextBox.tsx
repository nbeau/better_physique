import "../styles/TextBox.css";

interface Props {
    text: String;
    full: boolean;
}

function TextBox(props: Props) {

    return (
        <p className={props.full ? "textBox_full" : "textBox"} >{props.text}</p>
    );
}

export default TextBox;