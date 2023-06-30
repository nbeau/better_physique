import "../styles/MultistepForm.css";

type GoalData = {
    goal: string
}

type GoalFormProps = GoalData & {
  updateFields: (fields: Partial<GoalData>) => void
}

export function GoalForm({
    goal,
    updateFields,
}: GoalFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>Step 3: What is your goal?</h2>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-9 d-flex flex-column">
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="lose" checked={goal === "lose"} onChange={e => updateFields({ goal: e.target.value })} />
                            Lose Fat
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="gain" checked={goal === "gain"} onChange={e => updateFields({ goal: e.target.value })} />
                            Gain Muscle
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="goal" type="radio" value="maintain" checked={goal === "maintain" || goal === ""} onChange={e => updateFields({ goal: e.target.value })} />
                            Maintain Current Bodyweight
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}