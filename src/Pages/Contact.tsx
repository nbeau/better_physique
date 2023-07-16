import Header from "../components/Header";
import Text from "../components/Text";
import "../styles/Contact.css";

interface Props {
    lang: string;
}
function Contact({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Contact Us" : "Contactez-nous"} lang={lang} />
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        <Text centered={true} text={lang === "english" ?
                        "Our goal at Better Physique is to help people get started on their fitness journey. Fitness is an area where people can be very vulnerable, it is very easy for businesses to take advantage of people who don't know better. Many businesses try to sell their 'miracle' diets or workouts to magically help you see progress. These 'miracles' are almost always baseless and won't work long term. The purpose of this website is to help beginners to learn and understand the basics, so they can make their own choices and avoid being fooled by scam businesses. We do not make any profit from this website, and we do not sell any products, we just want to help. " :
                        "Notre objectif chez Better Physique est d'aider les gens à démarrer leur parcours de remise en forme. Le fitness est un domaine dans lequel les gens peuvent être très vulnérables, et il est très facile pour les entreprises de profiter des gens qui ne savent pas ce qu'il faut faire. De nombreuses entreprises essaient de vendre des régimes ou des séances d'entraînement 'miracles' qui vous aideront à progresser comme par magie. Ces 'miracles' sont presque toujours sans fondement et ne fonctionnent pas à long terme. L'objectif de ce site web est d'aider les débutants à apprendre et à comprendre les principes de base, afin qu'ils puissent faire leurs propres choix et éviter de se faire avoir par des entreprises frauduleuses. Nous ne tirons aucun profit de ce site, et nous ne vendons aucun produit, nous voulons simplement aider."}
                         />
                        <br/><br/>
                        <Text centered={true} text={lang === "english" ?
                        "If you have any questions or would like to speak directly with a professional for advice, you can call us or send us an email" :
                        "Si vous avez des questions ou si vous souhaitez parler directement à un professionnel pour obtenir des conseils, vous pouvez nous appeler ou nous envoyer un courrier électronique" }
                         />
                        <br/>
                        <div className="row justify-content-evenly contact">
                            <h3 className="col-auto justify-content-center">
                                <i className="fa-solid fa-phone" />
                                &nbsp;&nbsp;(613) 171-2018
                            </h3>
                            <h3 className="col-auto justify-content-center">
                                <i className="fa-solid fa-envelope" />
                                &nbsp;&nbsp;better@physique.com
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;