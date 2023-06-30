

type ActivityData = {
    activity: string
}

type ActivityFormProps = ActivityData & {
  updateFields: (fields: Partial<ActivityData>) => void
}

export function ActivityForm({
    activity,
    updateFields,
}: ActivityFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>Step 2: How often do you exercise?</h2>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-9 d-flex flex-column">
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="none" checked={activity === "none"} onChange={e => updateFields({ activity: e.target.value })} />
                            Never: I never intentionally exercise
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="low" checked={activity === "low"} onChange={e => updateFields({ activity: e.target.value })} />
                            Low: Any kind of physical activity 1-3x per week
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="mid" checked={activity === "mid" || activity === ""} onChange={e => updateFields({ activity: e.target.value })} />
                            Moderate: Exercise 3-4x per week
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="high" checked={activity === "high"} onChange={e => updateFields({ activity: e.target.value })} />
                            High: Intense exercise 5-6x per week
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="extreme" checked={activity === "extreme"} onChange={e => updateFields({ activity: e.target.value })} />
                            Very High: Intense exercise for 3+ hours per day
                        </label>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}