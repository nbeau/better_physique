import "../styles/MultistepForm.css";

type PhysicalData = {
    age: string
    sex: string
    height_feet: string
    height_inches: string
    height_cm: string
    weight_lb: string
    weight_kg: string
}

type PhysicalFormProps = PhysicalData & {
    updateFields: (fields: Partial<PhysicalData>) => void;
    lang: string;
    system: string;
}

export function PhysicalForm({
    age,
    sex,
    height_feet,
    height_inches,
    height_cm,
    weight_lb,
    weight_kg,
    updateFields,
    lang,
    system,
}: PhysicalFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>{lang === "english" ? "Step 1: Physical Data" : "Étape 1 : Données physiques"}</h2>
            </div>
            <div className="row mt-4">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>{lang === "english" ? "sex" : "sexe"}</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="radio me-3">
                        <label>
                            <input className="me-1" name="sex" type="radio" value="male" checked={sex === "male" || sex === ""} onChange={e => updateFields({ sex: e.target.value })} />
                            {lang === "english" ? "Male" : "Mâle"}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input className="me-1" name="sex" type="radio" value="female" checked={sex === "female"} onChange={e => updateFields({ sex: e.target.value })} />
                            {lang === "english" ? "Female" : "Femelle"}
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>{lang === "english" ? "age" : "âge"}</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="input_group d-flex">
                        <input className="form_input" required min={0} type="number" placeholder="0" value={age} onChange={e => updateFields({ age: e.target.value })} />
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>{lang === "english" ? "height" : "hauteur"}</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="input_group d-flex">
                        {system === "imperial" && 
                        <>
                            <input className="form_input" required min={0} type="number" placeholder={lang === "english" ? "ft" : "pieds"} value={height_feet} onChange={e => updateFields({ height_feet: e.target.value })} />
                            <input className="form_input" required min={0} max={11} type="number" placeholder={lang === "english" ? "in" : "pouces"} value={height_inches} onChange={e => updateFields({ height_inches: e.target.value })} />
                        </>}
                        {system === "metric" && <input className="form_input" required min={0} type="number" placeholder="cm" value={height_cm} onChange={e => updateFields({ height_cm: e.target.value})} />}
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>{lang === "english" ? "weight" : "poids"}</label>
                </div>
                <div className="col-9 d-flex">
                    {system === "imperial" && <input className="form_input" required min={1} type="number" placeholder={lang === "english" ? "lbs" : "livres"} value={weight_lb} onChange={e => updateFields({ weight_lb: e.target.value })} />}
                    {system === "metric" && <input className="form_input" required min={1} type="number" placeholder="kg" value={weight_kg} onChange={e => updateFields({ weight_kg: e.target.value })} />}
                </div>
            </div>
        </div>
    )
}
