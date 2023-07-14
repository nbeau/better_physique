import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import "../styles/Strength.css";

import { exercises } from "../components/Exercises";

function Strength() {
    return (
        <>
            <Header heading="Strength" />
            <div className="row row-cols-1 ms-5 mt-5 mb-3 gy-4 me-5">
                <div className="col d-flex flex-row">
                    <div className="strength_box">
                        <TextBox full={false} text="Rep range" />
                    </div>
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                </div>
                <div className="col d-flex flex-row">
                    <div className="strength_box">
                        <TextBox full={false} text="Weight" />
                    </div>
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                </div>
                <div className="col">
                    <Text centered={false} text="Here are a few good exercises for strength:" />
                </div>
            </div>
            <div className="row m-2 mb-5 gy-3">
                {exercises.map((e) => (
                    e.strength && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />
                ))}
            </div>
        </>
    );
}

export default Strength;