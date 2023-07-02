import "../styles/MultistepForm.css";

type PhysicalData = {
  age: string
  sex: string
  height_feet: string
  height_inches: string
  weight: string
}

type PhysicalFormProps = PhysicalData & {
  updateFields: (fields: Partial<PhysicalData>) => void
}

export function PhysicalForm({
    age,
    sex,
    height_feet,
    height_inches,
    weight,
    updateFields,
}: PhysicalFormProps) {
    return (
        <div className="container">
            <div className="row">
                <h2>Step 1: Physical Data</h2>
            </div>
            <div className="row mt-4">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>sex</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="radio me-3">
                        <label>
                            <input className="me-1" name="sex" type="radio" value="male" checked={sex === "male" || sex === ""} onChange={e => updateFields({ sex: e.target.value })} />
                            Male
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input className="me-1" name="sex" type="radio" value="female" checked={sex === "female"} onChange={e => updateFields({ sex: e.target.value })} />
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>age</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="input_group d-flex">
                        <input className="form_input" required min={1} type="number" placeholder="0" value={age} onChange={e => updateFields({ age: e.target.value })} />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>height</label>
                </div>
                <div className="col-9 d-flex">
                    <div className="input_group d-flex">
                        <input className="form_input" required min={0} max={9} type="number" placeholder="ft" value={height_feet} onChange={e => updateFields({ height_feet: e.target.value })} />
                        <input className="form_input" required min={0} max={11} type="number" placeholder="in" value={height_inches} onChange={e => updateFields({ height_inches: e.target.value })} />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3 d-flex flex-row justify-content-end">
                    <label>weight</label>
                </div>
                <div className="col-9 d-flex">
                    <input className="form_input" required min={1} type="number" placeholder="lbs" value={weight} onChange={e => updateFields({ weight: e.target.value })} />
                </div>
            </div>
        </div>
    )
}
