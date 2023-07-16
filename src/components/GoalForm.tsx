import "../styles/MultistepForm.css";

type GoalData = {
    goal: string
}

type GoalFormProps = GoalData & {
    updateFields: (fields: Partial<GoalData>) => void;
    lang: string;
}

export function GoalForm({
    goal,
    updateFields,
    lang,
}: GoalFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>{lang === "english" ? "Step 3: What is your goal?" : "Étape 3: Quel est votre objectif?"}</h2>
            </div>
            <div className="row mt-5 pt-3 justify-content-center">
                <div className="col-9 d-flex flex-column">
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="lose" checked={goal === "lose"} onChange={e => updateFields({ goal: e.target.value })} />
                            {lang === "english" ? "Lose Fat" : "Perdre du gras"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="gain" checked={goal === "gain"} onChange={e => updateFields({ goal: e.target.value })} />
                            {lang === "english" ? "Gain Muscle" : "Gagner du muscle"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="maintain" checked={goal === "maintain" || goal === ""} onChange={e => updateFields({ goal: e.target.value })} />
                            {lang === "english" ? "Maintain Current Bodyweight" : "Maintenir le poids actuel"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}