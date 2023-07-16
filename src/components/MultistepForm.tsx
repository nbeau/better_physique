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
    weight: string
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
    weight: "",
    activity: "mid",
    goal: "maintain",
    cals: "",
    protein: "",
}

interface Props {
    lang: string;
}

function MultistepForm({ lang }:Props) {
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isThirdStep, isLastStep, back, next } =
        useMultistepForm([
            <PhysicalForm {...data} updateFields={updateFields} lang={lang}/>,
            <ActivityForm {...data} updateFields={updateFields} />,
            <GoalForm {...data} updateFields={updateFields} />,
            <Results {...data} />
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
                    num = 6.09 * Number(data.weight) + 146 * Number(data.height_feet) + 12.2 * Number(data.height_inches) - 5.68 * Number(data.age) + 88
                    break;
                }
                case "female": {
                    num = 4.2 * Number(data.weight) + 94.5 * Number(data.height_feet) + 7.87 * Number(data.height_inches) - 4.33 * Number(data.age) + 448
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
            updateFields({ protein: Math.round(Number(data.weight) * 0.8).toString() })
        }
        if (isLastStep) {
            return back()
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
                        {isLastStep ? (lang === "english" ? "Back" : "Retour") : (isThirdStep ? (lang === "english" ? "Submit" : "Soumettre") : (lang === "english" ? "Next" : "Prochain"))}
                    </span>
                </button>
            </div>
        </form>
    </div>
)}

export default MultistepForm;