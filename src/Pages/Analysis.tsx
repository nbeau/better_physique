import Header from "../components/Header";
import Text from "../components/Text";
import MultistepForm from "../components/MultistepForm";
import "../styles/Analysis.css";

function Analysis() {

    return (
        <>
            <Header heading="Let's get started!" />
            <div className="container d-flex flex-column justify-content-center">
                <div className="col">
                    <Text centered={true} text="Answer these short questions to receive personalized advice for your fitness journey!" />
                </div>
                <div className="col d-flex justify-content-center">
                    <MultistepForm />
                </div>
            </div>
            
        </>
    )
}

export default Analysis;