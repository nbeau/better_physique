import Header from "../components/Header";
import Text from "../components/Text";
import MultistepForm from "../components/MultistepForm";
import "../styles/Analysis.css";
import { useState } from "react";

interface Props {
    lang: string;
}

function Analysis({ lang }:Props) {

    return (
        <>
            <Header heading={lang === "english" ? "Let's get started!" : "Commençons !"} lang={lang} />
            <div className="container d-flex flex-column justify-content-center">
                <div className="col">
                    <Text centered={true} text={lang === "english" ? 
                    "Answer these short questions to receive personalized advice for your fitness journey!" : 
                    "Répondez à ces quelques questions pour recevoir des conseils personnalisés pour votre parcours de remise en forme !"} />
                </div>
                <div className="col d-flex justify-content-center mt-4">
                    <MultistepForm lang={lang} />
                </div>
            </div>
            
        </>
    )
}

export default Analysis;