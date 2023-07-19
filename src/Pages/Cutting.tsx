import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/Cutting.css";

import { recipes } from "../components/Recipes";

interface Props {
    lang: string;
}
function Cutting({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Cutting" : "Coupe"} lang={lang} />
            <div className="row row-cols-1 ms-5 gy-4 me-5 justify-content-end">
            <div className="col-8 d-flex flex-row justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    <Button text={lang === "english" ? "Analysis" : "Analyse"} link="/analysis" />
                </div>
                <Text centered={true} text={lang === "english" ?
                    "Click this button to find out how many Calories and how much protein you should be consuming in order to achieve your goal." :
                    "Cliquez sur ce bouton pour connaître le nombre de calories et la quantité de protéines que vous devriez consommer pour atteindre votre objectif." }
                    />
            </div>
            <div className="col d-flex flex-row">
                <div className="cutting_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text={lang === "english" ? "Calories" : "Calories"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text={lang === "english" ?
                            "You should be eating in a caloric defecit, find an approximate amount by filling the Analysis form. If you don't have enough Calories, you will lose weight faster, but you will also lose muscle. If you have too many Calories, you will struggle to lose weight." :
                            "Vous devriez manger en déficit calorique, trouvez une quantité approximative en remplissant le formulaire d'analyse. Si vous n'avez pas assez de calories, vous perdrez du poids plus rapidement, mais vous perdrez aussi du muscle. Si vous avez trop de calories, vous aurez du mal à perdre du poids." }
                             />
                    </div>
                </div>
                <div className="col d-flex flex-row">
                    <div className="cutting_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text={lang === "english" ? "Protein" : "Protéines"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text={lang === "english" ?
                            "You should be eating a lot of protein every single day. You can find a good estimate by filling the Analysis form. If you don't have enough protein, you are more likely to lose muscle from this diet rather than fat." :
                            "Vous devriez manger beaucoup de protéines chaque jour. Vous pouvez obtenir une bonne estimation en remplissant le formulaire d'analyse. Si vous ne consommez pas assez de protéines, vous risquez de perdre du muscle plutôt que de la graisse" }
                             />
                    </div>
                </div>
                <div className="col">
                    <Text centered={false} text={lang === "english" ?
                    "Here are some good example recipes for cutting:" :
                    "Voici quelques exemples de recettes pour la coupe :" }
                    />
                </div>
            </div>
            <div className="row m-2 mb-5 gy-3">
                {recipes.map((e, index) => (
                    e.type === "cutting" && <Card key={index} title={e.title} title_fr={e.title_fr} img={e.img} rating={e.rating} rating_num={e.rating_num} link={e.link} lang={lang}/>
                ))}
            </div>
        </>
    );
}

export default Cutting;