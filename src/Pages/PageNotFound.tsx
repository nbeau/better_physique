import Text from "../components/Text";
import Button from "../components/Button";
import "../styles/404.css";

interface Props {
    lang: string;
}

function PageNotFound ({ lang }:Props) {
    return (
        <div className="space_top">
            <div className="col">
                <Text centered={true} text={lang === "english" ?
                "Sorry, the page you are looking for does not exist, click this button to go back to the home page." :
                "Désolé, la page que vous recherchez n'existe pas, cliquez sur ce bouton pour revenir au Foyer"}
                />
            </div>
            <div className="col d-flex flex-row justify-content-center mt-5">
                <Button text={lang === "english" ? "Home" : "Foyer"} link="/" />
            </div>
        </div>
    )
}

export default PageNotFound;