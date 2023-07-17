import { FormEvent, useState } from "react";
import { ActivityForm } from "./ActivityForm";
import { GoalForm } from "./GoalForm";
import { useMultistepForm } from "./useMultistepForm";
import { PhysicalForm } from "./PhysicalForm";
import { Results } from "./Results";
import "../styles/MultistepForm.css";

type FormData = {
    sex: string
    age: string
    height_feet: string
    height_inches: string
    height_cm: string
    weight_lb: string
    weight_kg: string
    activity: string
    goal: string
    cals: string
    protein: string
}

const INITIAL_DATA: FormData = {
    sex: "male",
    age: "",
    height_feet: "",
    height_inches: "",
    height_cm: "",
    weight_lb: "",
    weight_kg: "",
    activity: "mid",
    goal: "maintain",
    cals: "",
    protein: "",
}

interface Props {
    lang: string;
    system: string;
}

function MultistepForm({ lang, system }:Props) {
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isThirdStep, isLastStep, back, next, reset } =
        useMultistepForm([
            <PhysicalForm {...data} updateFields={updateFields} lang={lang} system={system} />,
            <ActivityForm {...data} updateFields={updateFields} lang={lang}/>,
            <GoalForm {...data} updateFields={updateFields} lang={lang}/>,
            <Results {...data} lang={lang}/>
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (isThirdStep) {
            var num = 0
            var diff = 0
            switch (data.goal) {
                case "gain": {
                    diff = 500
                    break;
                }
                case "lose": {
                    diff = -500
                    break;
                }
            }
            switch (data.sex) {
                case "male": {
                    num = (system === "imperial" ? 6.09 * Number(data.weight_lb) : 13.4 * Number(data.weight_kg)) + (system === "imperial" ? 146 * Number(data.height_feet) + 12.2 * Number(data.height_inches) : 4.8 * Number(data.height_cm)) - 5.68 * Number(data.age) + 88
                    break;
                }
                case "female": {
                    num = (system === "imperial" ? 4.2 * Number(data.weight_lb) : 9.25 * Number(data.weight_kg)) + (system === "imperial" ? 94.5 * Number(data.height_feet) + 7.87 * Number(data.height_inches) : 3.1 * Number(data.height_cm)) - 4.33 * Number(data.age) + 448
                    break;
                }
            }
            switch (data.activity) {
                case "none": {
                    num = num * 1.2
                    break;
                }
                case "low": {
                    num = num * 1.35
                    break;
                }
                case "mid": {
                    num = num * 1.5
                    break;
                }
                case "high": {
                    num = num * 1.6
                    break;
                }
                case "extreme": {
                    num = num * 1.75
                    break;
                }
            }
            num = num + diff
            updateFields({ cals: Math.round(num).toString() })
            system === "imperial" && updateFields({ protein: Math.round(Number(data.weight_lb) * 0.8).toString() })
            system === "metric" && updateFields({ protein: Math.round(Number(data.weight_kg) * 1.76).toString() })
        }
        if (isLastStep) {
            updateFields({ 
            sex: "male",
            age: "",
            height_feet: "",
            height_inches: "",
            height_cm: "",
            weight_lb: "",
            weight_kg: "",
            activity: "mid",
            goal: "maintain",
            cals: "",
            protein: "",
            });
            return reset()
        }
        return next()
}

return (
    <div className="form_container mx-4">
        <form onSubmit={onSubmit}>
            {step}
            <div className="form_bottom">
                {!isFirstStep && (
                    <button className="form_button" type="button" onClick={back}>
                        <span>
                            {lang === "english" ? "Back" : "Retour"}
                        </span>
                    </button>
                )}
                <div className="d-flex flex-column justify-content-center">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                <button className="form_button" type="submit">
                    <span>
                        {isLastStep ? (lang === "english" ? "Reset" : "Remise") : (isThirdStep ? (lang === "english" ? "Submit" : "Soumettre") : (lang === "english" ? "Next" : "Prochain"))}
                    </span>
                </button>
            </div>
        </form>
    </div>
)}

export default MultistepForm;