import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Card from "../components/Card";
import "../styles/Strength.css";

import bench from "../images/benchpress.jpeg";

function Strength() {
    return (
        <>
            <Header heading="Strength" />
            <div className="row row-cols-1 ms-5 mt-5">
                <div className="col d-flex flex-row">
                    <div className="box">
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
                    <div className="box">
                        <TextBox full={false} text="Weight" />
                    </div>
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                 </div>
            </div>
            <div className="row m-2">
                    <Card img={bench} rating={5} rating_num={2.6} title="Bench press"/>
                    <Card img={bench} rating={4} rating_num={3.2} title="Bench press"/>
                    <Card img={bench} rating={4} rating_num={3.2} title="Bench press"/>
                    <Card img={bench} rating={4} rating_num={2.5} title="Bench press"/>
                    <Card img={bench} rating={3} rating_num={1.9} title="Bench press"/>
                    <Card img={bench} rating={1} rating_num={1.8} title="Bench press"/>
            </div>
        </>
    );
}

export default Strength;