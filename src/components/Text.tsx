import "../styles/Text.css";

interface Props {
    text: String;
    centered: boolean;
}

function Text({ text, centered }:Props) {

    return (
        <p className={centered ? "text text_centered" : "text"} >{text}</p>
    );
}

export default Text;