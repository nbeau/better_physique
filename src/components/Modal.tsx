import { useState } from "react";
import "../styles/Modal.css";

import { exercises } from "./Exercises";
import { recipes } from "./Recipes";
import Card from "./Card";

type Data = {
    exercise_goal: string;
    split: string;
    dieting_goal: string;
    search: string;
}

const INITIAL_DATA: Data = {
    exercise_goal: "any",
    split: "any",
    dieting_goal: "any",
    search: "",
}

interface Props {
    search: string;
    closeModal: (val: boolean) => void;
    lang: string;
}

function Modal({ search, closeModal, lang }:Props) {
    const [data, setData] = useState(INITIAL_DATA);
    return (
        <div className="modal_background">
            <div className="modal_container">
                <div className="modal_close">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="row border-bottom pb-4">
                    <div className="col-6 border-end position-relative">
                        <div className="modal_title">
                            <h1>{lang === "english" ? "Find Exercises" : "Trouver des exercices"}</h1>
                        </div>
                        <h6 className="mt-3">{lang === "english" ? "Exercising Goal" : "Objectif de l'exercice"}</h6>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="exercise_goal" type="radio" value="strength" checked={data.exercise_goal === "strength"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            exercise_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Strength" : "Force"}: <span>{lang === "english" ? "get stronger" : "devenir plus fort"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="exercise_goal" type="radio" value="hypertrophy" checked={data.exercise_goal === "hypertrophy"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            exercise_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Hypertrophy" : "Hypertrophie"}: <span>{lang === "english" ? "build more muscle" : "développer la musculature"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="exercise_goal" type="radio" value="endurance" checked={data.exercise_goal === "endurance"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            exercise_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Endurance" : "Endurance"}: <span>{lang === "english" ? "increase stamina" : "augmenter l'endurance"}</span></span>
                            </label>
                        </div><div className="radio ms-3">
                            <label>
                                <input className="me-1" name="exercise_goal" type="radio" value="any" checked={data.exercise_goal === "any"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            exercise_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Any" : "Tous"}</span>
                            </label>
                        </div>
                        <h6 className="mt-3">{lang === "english" ? "Split" : "Séparation"}</h6>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="split" type="radio" value="push" disabled={data.exercise_goal === "endurance"} checked={data.exercise_goal !== "endurance" && data.split === "push"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            split: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Push" : "Pousser"}: <span>{lang === "english" ? "chest, shoulders, triceps" : "poitrine, épaules, triceps"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="split" type="radio" value="pull" disabled={data.exercise_goal === "endurance"} checked={data.exercise_goal !== "endurance" && data.split === "pull"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            split: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Pull" : "Tirer"}: <span>{lang === "english" ? "back, biceps, forearms" : "dos, biceps, avant-bras"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="split" type="radio" value="legs" disabled={data.exercise_goal === "endurance"} checked={data.exercise_goal !== "endurance" && data.split === "legs"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            split: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Legs" : "Jambes"}: <span>{lang === "english" ? "quads, hamdstrings, calves" : "quadriceps, ischio-jambiers, mollets"}</span></span>
                            </label>
                        </div><div className="radio ms-3">
                            <label>
                                <input className="me-1" name="split" type="radio" value="any" disabled={data.exercise_goal === "endurance"} checked={data.exercise_goal === "endurance" || data.split === "any"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            split: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Any" : "Tous"}</span>
                            </label>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <button className="modal_button" type="submit" 
                                onClick={() => {
                                    setData(prevState => ({
                                        ...prevState,
                                        search: "exercises"
                                    }))
                                }}>
                                <span>{lang === "english" ? "Find exercises" : "Trouver des exercises"}</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-6 position-relative">
                        <div className="modal_title">
                            <h1>{lang === "english" ? "Find Recipes" : "Trouver des recettes"}</h1>
                        </div>
                        <h6 className="mt-3">{lang === "english" ? "Dieting Goal" : "Objectif de régime"}</h6>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="dieting_goal" type="radio" value="bulking" checked={data.dieting_goal === "bulking"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            dieting_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Bulking" : "Gonflage"}: <span>{lang === "english" ? "build muscle" : "développer la musculature"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="dieting_goal" type="radio" value="cutting" checked={data.dieting_goal === "cutting"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            dieting_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Cutting" : "Coupe"}: <span>{lang === "english" ? "lose fat" : "perdre de la graisse"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="dieting_goal" type="radio" value="maintaining" checked={data.dieting_goal === "maintaining"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            dieting_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Maintaining" : "Maintien"}: <span>{lang === "english" ? "build muslce and lose fat (slower)" : "développer la musculature et perdre de la graisse (plus lentement)"}</span></span>
                            </label>
                        </div>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="dieting_goal" type="radio" value="any" checked={data.dieting_goal === "any"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            dieting_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">{lang === "english" ? "Any" : "Tous"}</span>
                            </label>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <button className="modal_button" type="submit" 
                                onClick={() => {
                                    setData(prevState => ({
                                        ...prevState,
                                        search: "recipes"
                                    }))
                                }}>
                                <span>{lang === "english" ? "Find recipes" : "Trouver des recettes"}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row m-2 mb-5 gy-3">
                    <span className="modal_resultsSpan"><h5 className="m-0 mt-2">{lang === "english" ? "Results" : "Résultats"}</h5> ({lang === "english" ? "sorted by rating" : "triés par note"})</span>
                    {(data.search === "exercises" && exercises.map((e) => (
                        (e.title.toLowerCase().includes(search.toLowerCase()) && (
                        (data.split === e.type || data.split === "any") &&
                        (data.exercise_goal === "any" && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang} />
                        ||
                        (data.exercise_goal === "strength" && e.strength && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang} />)
                        ||
                        (data.exercise_goal === "hypertrophy" && e.hypertrophy && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang} />)
                        ) ||
                        (data.exercise_goal === "endurance" && e.endurance && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang} />)
                        )))
                    )) || (data.search === "recipes" && recipes.map((e) => (
                        (e.title.toLowerCase().includes(search.toLowerCase()) &&
                        (data.dieting_goal === e.type || data.dieting_goal === "any") &&
                        <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} lang={lang} />
                        )
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Modal;