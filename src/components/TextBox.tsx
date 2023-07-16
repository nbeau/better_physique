import "../styles/TextBox.css";

interface Props {
    text: String;
    full: boolean;
}

function TextBox({ text, full }:Props) {

    return (
        <p className={full ? "textBox_full" : "textBox"} >{text}</p>
    );
}

export default TextBox;