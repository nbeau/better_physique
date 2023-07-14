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
}

function Modal({ search, closeModal }:Props) {
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
                            <h1>Find Exercises</h1>
                        </div>
                        <h6 className="mt-3">Exercising Goal</h6>
                        
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="exercise_goal" type="radio" value="strength" checked={data.exercise_goal === "strength"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            exercise_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">Strength: <span>get stronger</span></span>
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
                                <span className="modal_option">Hypertrophy: <span>build more muscle</span></span>
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
                                <span className="modal_option">Endurance: <span>increase stamina</span></span>
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
                                <span className="modal_option">Any</span>
                            </label>
                        </div>
                        <h6 className="mt-3">Split</h6>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="split" type="radio" value="push" disabled={data.exercise_goal === "endurance"} checked={data.exercise_goal !== "endurance" && data.split === "push"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            split: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">Push: <span>chest, shoulders, triceps</span></span>
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
                                <span className="modal_option">Pull: <span>back, biceps, forearms</span></span>
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
                                <span className="modal_option">Legs: <span>quads, hamdstrings, calves</span></span>
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
                                <span className="modal_option">Any</span>
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
                                <span>Find exercises</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-6 position-relative">
                        <div className="modal_title">
                            <h1>Find Recipes</h1>
                        </div>
                        <h6 className="mt-3">Dieting Goal</h6>
                        <div className="radio ms-3">
                            <label>
                                <input className="me-1" name="dieting_goal" type="radio" value="bulking" checked={data.dieting_goal === "bulking"} 
                                    onChange={e => {
                                        setData(prevState => ({
                                            ...prevState, 
                                            dieting_goal: e.target.value
                                        }))
                                    }} />
                                <span className="modal_option">Bulking: <span>build muscle</span></span>
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
                                <span className="modal_option">Cutting: <span>lose fat</span></span>
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
                                <span className="modal_option">Maintaining: <span>build muslce and lose fat (slower)</span></span>
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
                                <span className="modal_option">Any</span>
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
                                <span>Find recipes</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row m-2 mb-5 gy-3">
                    <span className="modal_resultsSpan"><h5 className="m-0 mt-2">Results</h5> (sorted by rating)</span>
                    {(data.search === "exercises" && exercises.map((e) => (
                        (e.title.toLowerCase().includes(search.toLowerCase()) && (
                        (data.split === e.type || data.split === "any") &&
                        (data.exercise_goal === "any" && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />
                        ||
                        (data.exercise_goal === "strength" && e.strength && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />)
                        ||
                        (data.exercise_goal === "hypertrophy" && e.hypertrophy && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />)
                        ) ||
                        (data.exercise_goal === "endurance" && e.endurance && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />)
                        )))
                    )) || (data.search === "recipes" && recipes.map((e) => (
                        (e.title.toLowerCase().includes(search.toLowerCase()) &&
                        (data.dieting_goal === e.type || data.dieting_goal === "any") &&
                        <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />
                        )
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Modal;