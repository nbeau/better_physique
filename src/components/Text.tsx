import "../styles/Text.css";

interface Props {
    text: String;
    centered: boolean;
}

function Text(props: Props) {

    return (
        <p className={props.centered ? "text text_centered" : "text"} >{props.text}</p>
    );
}

export default Text;