import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Button from "../components/Button";
import "../styles/Training.css";
import pushup from "../images/pushup.png";

interface Props {
    lang: string;
}
function Training({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Training" : "Entrainement"} lang={lang} />
            <div className="d-flex flex-row justify-content-end pushup_container">
                <img src={pushup} className="pushup_img" alt="pushup"></img>
            </div>
            <TextBox full={true} text={lang === "english" ?
                "The goal of exercising is to push your body to its limit. By doing difficult exercises properly, you are forcing your body to adapt. This is how you get stronger, build muscle, and increase your stamina. Different types of exercises will have different results. For example: lifting weight can make you stronger and more muscular, while running can increase your stamina. To learn more about the different types of workouts, see below." :
                "Le but de l'exercice est de pousser le corps à ses limites. En effectuant correctement des exercices difficiles, vous obligez votre corps à s'adapter. C'est ainsi que vous devenez plus fort, que vous développez vos muscles et que vous augmentez votre endurance. Différents types d'exercices donnent des résultats différents. Par exemple, soulever des poids peut vous rendre plus fort et plus musclé, tandis que la course à pied peut augmenter votre endurance. Pour en savoir plus sur les différents types d'exercices, voir ci-dessous."}
                 />
            <div className="row row-cols-1 row-cols-lg-4 justify-content-center mt-5">
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Stength" : "Force"} link="/training/strength" />
                    <Text centered={false} text={lang === "english" ?
                        "Strength training implies that the goal of your workout is to get stronger. To achieve this, you should be consistently aiming to lift heavier and heavier weight. Click the 'Strength' button to learn more." :
                        "L'entraînement de force implique que l'objectif de votre entraînement est de devenir plus fort. Pour y parvenir, vous devez vous efforcer de soulever des poids de plus en plus lourds. Cliquez sur le bouton 'Force' pour en savoir plus."}
                         />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Hypertrophy" : "Hypertrophie"} link="/training/hypertrophy" />
                    <Text centered={false} text={lang === "english" ?
                        "Hypertrophy training implies that the goal of your workout is to get bigger muscles. This is the best option if you just want to look better but don't care as much about getting stronger. This can be done with any kind of weight lifting, but some techniques are more optimal. Click the 'Hypertrophy' button to learn more." :
                        "L'entraînement d'hypertrophie implique que l'objectif de votre séance d'entraînement est d'obtenir des muscles plus gros. Il s'agit de la meilleure option si vous souhaitez simplement avoir une meilleure apparence mais que vous ne vous souciez pas tant que cela de devenir plus fort. Il est possible d'utiliser n'importe quel type de poids et haltères, mais certaines techniques sont plus optimales. Cliquez sur le bouton 'Hypertrophie' pour en savoir plus."}
                         />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column px-5 py-2 px-lg-3 py-lg-0">
                    <Button text={lang === "english" ? "Endurance" : "Endurance"} link="/training/endurance" />
                    <Text centered={false} text={lang === "english" ?
                        "Endurance training implies that the goal of your workout is to increase your stamina. The best way to do this is with exercises which require you to exert yourself for as long as possible. These types of workout are great for and also burn a lot of calories. Click the 'Endurance' button to learn more." :
                        "L'entraînement d'endurance implique que l'objectif de votre séance d'entraînement est d'augmenter votre résistance. La meilleure façon d'y parvenir est de faire des exercices qui vous obligent à vous dépenser le plus longtemps possible. Ce type d'entraînement est idéal pour brûler beaucoup de calories. Cliquez sur le bouton 'Endurance' pour en savoir plus."}
                         />
                </div>
            </div>
        </>
    );
}

export default Training;