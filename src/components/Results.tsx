import "../styles/MultistepForm.css";
import Text from "../components/Text"

type ResultsData = {
    cals: string
    protein: string
    lang: string
}

export function Results({cals, protein, lang}: ResultsData) {
    return (
        <div className="container">
            <div className="row mb-4">
                <h2>{lang === "english" ? "Results!" : "Résultats!"}</h2>
            </div>
            <div className="mt-3">
                <Text centered={true} text={lang === "english" ? 
                `You need to consume an average of about ${cals} Calories per day in order to reach your goal!` :
                `Vous devez consommer en moyenne environ ${cals} Calories par jour pour atteindre votre objectif!`}
                 />
                <br />
                <Text centered={true} text={lang === "english" ?
                `Aim to consume about ${protein} grams of protein per day! (Yes it is alot)` :
                `Visez à consommer environ ${protein} grammes de protéines par jour! (Oui, c'est beaucoup)`}
                 />
                <br />
                <Text centered={true} text={lang === "english" ? 
                `And finally, don't forget to train hard!` :
                `Et enfin, n'oubliez pas de vous entraîner dur!`}
                 />
            </div>
        </div>
    )
}
