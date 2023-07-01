import "../styles/MultistepForm.css";
import Text from "../components/Text"

type ResultsData = {
    goal: string
    cals: string
    protein: string
}

export function Results({cals, protein, goal}: ResultsData) {
    return (
        <div className="container">
            <div className="row mb-4">
                <h2>Results!</h2>
            </div>
            <div className="mt-3">
                <Text centered={true} text={`
                You need to consume an average of about ${cals} 
                Calories per day in order to reach your goal!
                `} />
                <br />
                <Text centered={true} text={`
                Aim to consume about ${protein} 
                grams of protein per day!
                `} />
                <br />
                <Text centered={true} text={`
                And finally, don't forget to train hard!
                `} />
            </div>
        </div>
    )
}
