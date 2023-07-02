import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import Button from "../components/Button";
import "../styles/Maintaining.css";

import { recipes } from "../components/Recipes";

function Maintaining() {
    return (
        <>
            <Header heading="Maintaining" />

            <div className="row row-cols-1 ms-5 gy-4 me-5 justify-content-end">
            <div className="col-8 d-flex flex-row justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    <Button text="Analysis" link="/analysis" />
                </div>
                <Text centered={true} text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                " />
            </div>
            <div className="col d-flex flex-row">
                <div className="maintaining_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text="Calories" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text="
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                    </div>
                </div>
                <div className="col d-flex flex-row">
                    <div className="maintaining_box d-flex flex-column justify-content-center">
                        <TextBox full={false} text="Protein" />
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <Text centered={false} text="
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                    </div>
                </div>
            </div>
            <div className="row m-2">
                {recipes.map((e) => (
                    e.type === "maintaining" && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />
                ))}
            </div>
        </>
    );
}

export default Maintaining;