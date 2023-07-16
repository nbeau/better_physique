import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/Bulking.css";

import { recipes } from "../components/Recipes";

interface Props {
    lang: string;
}
function Bulking({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Bulking" : "Gonflage"} lang={lang}/>
            <div className="row row-cols-1 ms-5 gy-4 me-5 justify-content-end">
                <div className="col-8 d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <Button text={lang === "english" ? "Analysis" : "Analyse"} link="/analysis" />
                    </div>
                    <Text centered={true} text={lang === "english" ?
                        "Click this button to find out how many Calories and how much protein you should be consuming in order to achieve your goal." :
                        "Cliquez sur ce bouton pour connaître le nombre de calories et la quantité de protéines que vous devriez consommer pour atteindre votre objectif."}
                         />
                </div>
                <div className="col d-flex flex-row">
                    <div className="bulking_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text={lang === "english" ? "Calories" : "Calories"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text={lang === "english" ?
                            "You should be eating in a caloric surplus, find an approximate amount by filling the Analysis form. If you don't have enough Calories, you will struggle to gain weight, if you have too much, you will gain more unwanted fat." :
                            "Vous devriez manger un surplus calorique, trouvez une quantité approximative en remplissant le formulaire d'analyse. Si vous n'avez pas assez de calories, vous aurez du mal à prendre du poids, si vous en avez trop, vous prendrez encore plus de graisse indésirable" }
                             />
                    </div>
                </div>
                <div className="col d-flex flex-row">
                    <div className="bulking_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text={lang === "english" ? "Protein" : "Protéines"} />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text={lang === "english" ?
                            "You should be eating a lot of protein every single day. You can find a good estimate by filling the Analysis form. If you don't have enough protein, you are more likely to gain fat from this diet rather than muscle." :
                            "Vous devriez manger beaucoup de protéines chaque jour. Vous pouvez obtenir une bonne estimation en remplissant le formulaire d'analyse. Si vous n'avez pas assez de protéines, vous risquez davantage de prendre de la graisse que du muscle." }
                             />
                    </div>
                </div>
                <div className="col">
                    <Text centered={false} text={lang === "english" ?
                    "Here are some good example recipes for bulking:" :
                    "Voici quelques exemples de recettes pour le Gonflage:"}
                     />
                </div>
            </div>
            <div className="row m-2 bt-5 gy-3">
                {recipes.map((e, index) => (
                    e.type === "bulking" && <Card key={index} title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang}/>
                ))}
            </div>
        </>
    );
}

export default Bulking;