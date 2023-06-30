import "../styles/MultistepForm.css";
import Text from "../components/Text"

type ResultsData = {
    cals: string
}

export function Results({
    cals
    }: ResultsData) {
    return (
        <div className="container">
            <div className="row mb-4">
                <h2>Results!</h2>
            </div>
            <Text centered={true} text={`You need to consume an average of about ${cals} Calories per day in order to reach your goal!`} />
        </div>
    )
}
