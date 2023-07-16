import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import "../styles/Endurance.css";

import { exercises } from "../components/Exercises";

interface Props {
    lang: string;
}

function Endurance({ lang }:Props) {
    return (
        <>
            <Header heading={lang === "english" ? "Endurance" : "Endurance"} lang={lang}/>
            <div className="row row-cols-1 ms-5 mt-2 mb-3 gy-4 me-5">
                <div className="col">
                    <Text centered={true} text={lang === "english" ?
                        "Endurance training means to train your ability to endure exercising for longer periods of time. The more intense the exercise, the harder it is to do for a long time, endurance training makes this kind of exercise easier. The goal of endurance training is to maintain heavier breathing and an elevated heart rate throughout your workout. This act will improve the health of your heart, lungs, and circulatory system. Whether you're walking, running, swimming, boxing, etc... do it for as long as you can endure with intensity, and do so consistently." :
                        "L'entraînement à l'endurance consiste à entraîner votre capacité à supporter un exercice pendant de longues périodes. Plus l'exercice est intense, plus il est difficile de le faire pendant une longue période ; l'entraînement à l'endurance rend ce type d'exercice plus facile. L'objectif de l'entraînement à l'endurance est de maintenir une respiration plus forte et une fréquence cardiaque élevée pendant toute la durée de l'exercice. Cette action améliorera la santé de votre cœur, de vos poumons et de votre système circulatoire. Que vous marchiez, couriez, nagiez, fassiez de la boxe, etc... faites-le aussi longtemps que vous pouvez le supporter avec intensité, et faites-le régulièrement."}
                         />
                </div>
                <div className="col mt-5 mb-0">
                    <Text centered={false} text={lang === "english" ? "Here are some good exercises for endurance:" : "Voici quelques bons exercices d'endurance :"}/>
                </div>
            </div>
            <div className="row m-2 mb-5 gy-3">
                {exercises.map((e, index) => (
                    e.endurance && <Card key={index} title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang}/>
                ))}
            </div>
        </>
    );
}

export default Endurance;