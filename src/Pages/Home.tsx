import Header from "../components/Header";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import arnold from "../images/arnold.png";
import "../styles/Home.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Header heading="Build a Better Physique" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <img src={arnold} className="home_arnold" alt="arnold" />
                    </div>
                    <div className="col-6">
                        <TextBox full={false} text="
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                            sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                            " />
                        <div className="row home_spacing pt-3">
                            <div className="col justify-content-center">
                                <Text centered={true} text="Click these buttons to learn about:"/>
                            </div>
                        </div>
                        <div className="row home_spacing">
                            <div className="col-6 d-flex justify-content-end">
                                <Button text="Training" link="/training"/>
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <Button text="Dieting" link="/dieting" />
                            </div>
                        </div>
                        <div className="row home_spacing pt-3 mt-4">
                            <div className="col justify-content-center">
                                <Text centered={true} text="Answer a few short questions to receive personalized advice for your fitness journey!"/>
                            </div>
                        </div>
                        <div className="row home_spacing justify-content-center">
                            <div className="col-auto">
                                <Button text="Analysis" link="/analysis"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;