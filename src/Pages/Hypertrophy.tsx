import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import "../styles/Hypertrophy.css";

import { exercises } from "../components/Exercises";

interface Props {
    lang: string;
}

function Hypertrophy({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Hypertrophy" : "Hypertrophie"} lang={lang}/>
            <div className="row row-cols-1 ms-5 mt-5 mb-3 gy-4 me-5">
                <div className="col d-flex flex-row">
                    <div className="strength_box">
                        <TextBox full={false} text={lang === "english" ? "Rep range" : "Répétitions"} />
                    </div>
                    <Text centered={false} text={lang === "english" ?
                        "Rep: performing the full movement one time. You should be aiming to do around 8 to 15 reps per set when you're doing an exercise, where your last rep should be very difficult to complete (near failure - last rep is very difficult). This means you may need to adjust the weight you're using in order to reach failure somewhere between 8 and 20 reps." :
                        "Répétitions : exécution d'un mouvement complet une seule fois. Vous devriez viser à faire entre 8 et 15 répétitions par série lorsque vous faites un exercice dont la dernière répétition doit être très difficile à réaliser (proche de l'échec - la dernière répétition est très difficile). Cela signifie que vous devrez peut-être ajuster le poids que vous utilisez afin d'atteindre l'échec entre 8 et 20 répétitions."}
                         />
                </div>
                <div className="col d-flex flex-row">
                    <div className="strength_box">
                        <TextBox full={false} text={lang === "english" ? "Sets" : "Séries"} />
                    </div>
                    <Text centered={false} text={lang === "english" ?
                        "Set: some amount of reps performed in a row without break. You should be aiming to perform 10 to 15 sets per muscle per week. So 10-15 total sets per week of exercises which work the chest, 10-15 sets for back, etc... (many exericises can work more than one muscle at a time). Doing more than this can actually do more harm than good." :
                        "Série : un certain nombre de répétitions effectuées d'affilée sans pause. Vous devriez viser à effectuer 10 à 15 séries par muscle et par semaine. Par exemple, 10 à 15 séries par semaine d'exercices pour la poitrine, 10 à 15 séries pour le dos, etc... (de nombreux exercices peuvent faire travailler plus d'un muscle à la fois). En faire plus que cela peut en fait faire plus de mal que de bien." }
                         />
                </div>
                <div className="col d-flex flex-row">
                    <div className="strength_box">
                        <TextBox full={false} text={lang === "english" ? "Weight" : "Poids"} />
                    </div>
                    <Text centered={false} text={lang === "english" ?
                        "The weight you're using should be very difficult to lift, and you should be increasing this weight over time as you get stronger. If you're reaching failure within 8 to 20 reps, you're using a good weight. Make sure you're able to lift the weight safely, it's too heavy if you can't." :
                        "Le poids que vous utilisez doit être très difficile à soulever et vous devez l'augmenter au fur et à mesure que vous devenez plus fort. Si vous atteignez l'échec après 8 à 20 répétitions, vous utilisez un bon poids. Assurez-vous de pouvoir soulever le poids en toute sécurité, il est trop lourd si vous ne pouvez pas le faire." }
                         />
                </div>
                <div className="col">
                    <Text centered={false} text={lang === "english" ? "Here are some good exercises for hypertrophy:" : "Voici quelques bons exercices pour l'hypertrophie:"} />
                </div>
            </div>
            <div className="row m-2 mb-5 gy-3">
                {exercises.map((e, index) => (
                    e.hypertrophy && <Card key={index} title={e.title} title_fr={e.title_fr} img={e.img} rating={e.rating} rating_num={e.rating_num} link={e.link} lang={lang} />
                ))}
            </div>
        </>
    );
}

export default Hypertrophy;