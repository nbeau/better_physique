import Header from "../components/Header";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import arnold from "../images/arnold.png";
import "../styles/Home.css"
import { Link } from "react-router-dom";

interface Props {
    lang: string;
}

function Home({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Build a Better Physique" : "Construire un meilleur corps"} lang={lang} />
            <div className="container-fluid">
                <div className="row">
                    <div className="arnold_container col-6 d-flex justify-content-center">
                        <img src={arnold} className="home_arnold" alt="Arnold Schwarzenegger Flexing" />
                    </div>
                    <div className="col-6">
                        <TextBox full={false} text={lang === "english" ?
                            "The two most important concepts for your fitness journey are the exercise and the dieting. By properly using these two concepts with consistency, you are guarenteed to see results over time. There is no such thing as a trick to make things faster, there is no secret workout, and no secret diet. This website serves as a guide for you to learn the basics about these two concepts. But remember, consistency is more important than the exercises or diets you follow." :
                            "Les deux concepts les plus importants pour votre parcours de remise en forme sont l'exercice et le régime. En utilisant correctement ces deux concepts avec constance, vous êtes assuré de voir des résultats au fil du temps. Il n'y a pas d'astuce pour accélérer les choses, il n'y a pas d'entraînement secret, ni de régime secret. Ce site web sert de guide pour vous permettre d'apprendre les bases de ces deux concepts. Mais n'oubliez pas que la constance est plus importante que les exercices ou les régimes que vous suivez."} 
                             />
                        <div className="row home_spacing pt-3">
                            <div className="col justify-content-center">
                                <Text centered={true} text={lang === "english" ? 
                                "Click these buttons to learn about:" :
                                "Cliquez sur ces boutons pour en savoir plus :"}
                                 />
                            </div>
                        </div>
                        <div className="row home_spacing">
                            <div className="col-6 d-flex justify-content-end">
                                <Button text={lang === "english" ? "Training" : "Entrainement"} link="/training" />
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <Button text={lang === "english" ? "Dieting" : "Régime"} link="/dieting" />
                            </div>
                        </div>
                        <div className="row home_spacing pt-3 mt-4">
                            <div className="col justify-content-center">
                                <Text centered={true} text={lang === "english" ?
                                "Answer a few short questions to receive personalized advice for your fitness journey!" :
                                "Répondez à quelques questions pour recevoir des conseils personnalisés pour votre parcours de remise en forme !"}
                                 />
                            </div>
                        </div>
                        <div className="row home_spacing justify-content-center">
                            <div className="col-auto">
                                <Button text={lang === "english" ? "Analysis" : "Analyse"} link="/analysis" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;