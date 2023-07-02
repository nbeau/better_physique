import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import "../styles/Endurance.css";

import { exercises } from "../components/Exercises";

function Endurance() {
    return (
        <>
            <Header heading="Endurance" />
            <div className="row row-cols-1 ms-5 mt-2 mb-3 gy-4 me-5">
                <div className="col">
                    <Text centered={true} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    " />
                </div>
                <div className="col">
                    <Text centered={false} text="Here are some good exercises for endurance:" />
                </div>
            </div>
            <div className="row m-2 mb-5">
                {exercises.map((e) => (
                    e.endurance && <Card title={e.title} img={e.img} rating={e.rating} rating_num={e.rating_num} />
                ))}
            </div>
        </>
    );
}

export default Endurance;