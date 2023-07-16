type ActivityData = {
    activity: string
}

type ActivityFormProps = ActivityData & {
    updateFields: (fields: Partial<ActivityData>) => void;
    lang: string;
}

export function ActivityForm({
    activity,
    updateFields,
    lang,
}: ActivityFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>{lang === "english" ? "Step 2: How often do you exercise?" : "Étape 2 : À quelle fréquence faites-vous de l'exercice ?"}</h2>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-9 d-flex flex-column">
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="none" checked={activity === "none"} onChange={e => updateFields({ activity: e.target.value })} />
                            {lang === "english" ? "Never: I never intentionally exercise" : "Jamais: je ne fais jamais d'exercice physique intentionnellement"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="low" checked={activity === "low"} onChange={e => updateFields({ activity: e.target.value })} />
                            {lang === "english" ? "Low: Any kind of physical activity 1-3x per week" : "Faible: Toute forme d'activité physique 1-3x par semaine"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="mid" checked={activity === "mid" || activity === ""} onChange={e => updateFields({ activity: e.target.value })} />
                            {lang === "english" ? "Moderate: Exercise 3-4x per week" : "Modéré: Faire de l'exercice 3-4x par semaine"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="high" checked={activity === "high"} onChange={e => updateFields({ activity: e.target.value })} />
                            {lang === "english" ? "High: Intense exercise 5-6x per week" : "Élevé: Exercices intenses 5-6x par semaine"}
                        </label>
                    </div>
                    <div className="radio mb-3">
                        <label>
                            <input className="me-1" name="activity" type="radio" value="extreme" checked={activity === "extreme"} onChange={e => updateFields({ activity: e.target.value })} />
                            {lang === "english" ? "Very High: Intense exercise for 3+ hours per day" : "Très élevé: Exercice intense pendant plus de 3 heures par jour"}
                        </label>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}