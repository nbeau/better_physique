import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Button from "../components/Button";
import "../styles/Dieting.css";

interface Props {
    lang: string;
}
function Dieting({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Dieting" : "Régime"} lang={lang} />
            <div className="container">
                <div className="row p-3">
                </div>
            </div>
            <TextBox full={true} text={lang === "english" ?
                "The purpose of dieting is to control your weight and health. Whether you want to gain or lose weight, you have to consider the laws of thermodynamics. Your body requires a certain amount of energy in order to function, this energy is measured with Calories. If you consume more Calories than your body requires, you will gain weight, if you consume fewer Calories than your body requires, you will lose weight. Whether you gain or lose weight (muscle or fat) depends on what food you're eating and what exercise you're doing. All diets that actually work are dependant on counting Calories. There is no such thing as a secret diet to lose weight fast. To learn about the types of diets, see below." :
                "L'objectif d'un régime est de contrôler son poids et sa santé. Que vous souhaitiez prendre ou perdre du poids, vous devez tenir compte des lois de la thermodynamique. Votre corps a besoin d'une certaine quantité d'énergie pour fonctionner, cette énergie est mesurée en calories. Si vous consommez plus de calories que votre corps n'en a besoin, vous prendrez du poids ; si vous consommez moins de calories que votre corps n'en a besoin, vous perdrez du poids. La prise ou la perte de poids (muscle ou graisse) dépend de la nourriture que vous mangez et de l'exercice que vous pratiquez. Tous les régimes qui fonctionnent réellement dépendent du comptage des calories. Il n'existe pas de régime secret pour perdre du poids rapidement. Pour en savoir plus sur les types de régimes, voir ci-dessous."}
                 />
            <div className="row row-cols-1 row-cols-lg-4 justify-content-center mt-5">
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Bulking" : "Gonflage"} link="/dieting/bulking"/>
                    <Text centered={false} text={lang === "english" ?
                        "Bulking is a type of diet where the goal is to put on more muscle, this muscle usually comes with some extra fat which can be lost later. In order to gain muscle, you have to consume more Calories than your body requires, and stimulate your muscles to grow. Click the 'Bulking' button to learn more." :
                        "Le gonflage est un type de régime dont l'objectif est de prendre du muscle, ce muscle étant généralement accompagné d'un surplus de graisse qui peut être perdu ultérieurement. Pour gagner du muscle, vous devez consommer plus de calories que votre corps n'en a besoin et stimuler la croissance de vos muscles. Cliquez sur le bouton 'Gonflage' pour en savoir plus."}
                         />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Cutting" : "Coupe"} link="/dieting/cutting" />
                    <Text centered={false} text={lang === "english" ?
                        "Cutting is a type of diet where the goal is to lose fat while trying to keep as much muscle as possible. In order to lose fat, you have to consume fewer Calories than your body requires. It is also important to eat enough protein and exercise to avoid losing the muscle you've put on. Click the 'Cutting' button to learn more." :
                        "La coupe est un type de régime dont l'objectif est de perdre de la graisse tout en essayant de conserver le plus de muscles possible. Pour perdre de la graisse, il faut consommer moins de calories que ce dont le corps a besoin. Il est également important de manger suffisamment de protéines et de faire de l'exercice pour éviter de perdre les muscles que vous avez pris. Cliquez sur le bouton 'Coupe' pour en savoir plus."}
                         />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Maintaining" : "Maintien"} link="/dieting/maintaining" />
                    <Text centered={false} text={lang === "english" ?
                        "Maintaining is a type of diet where the goal is to maintain your current weight, this is done by combining techniques from the other two types of diets. If done right, it is possible to slowly gain muscle and lose fat over time. Many people like this method since it is very consistent, but the progress is usually slower over time. Click the 'Maintaining' button to learn more." :
                        "Le maintien est un type de régime dont l'objectif est de conserver son poids actuel, en combinant les techniques des deux autres types de régimes. Si l'on s'y prend bien, il est possible de gagner lentement du muscle et de perdre de la graisse au fil du temps. De nombreuses personnes apprécient cette méthode car elle est très cohérente, mais les progrès sont généralement plus lents au fil du temps. Cliquez sur le bouton 'Maintien' pour en savoir plus."}
                        />
                </div>
            </div>
        </>
    );
}

export default Dieting;