import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Text from "../components/Text";
import Button from "../components/Button";
import "../styles/Training.css";

function Training() {
    return (
        <>
            <Header heading="Training" />
            <div className="row p-3"></div>
            <TextBox full={true} text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
                " />
            <div className="row row-cols-1 row-cols-lg-4 justify-content-center mt-5">
                <div className="col-auto d-flex flex-row flex-lg-column justify-content-center px-5 py-2 px-lg-3 py-lg-0">
                    <Button text="Stength" link="/better/Training/Strength"/>
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column justify-content-center px-5 py-2 px-lg-3 py-lg-0">
                    <Button text="Hypertrophy" link="/better/Training/Hypertrophy" />
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                </div>
                <div className="col-auto d-flex flex-row flex-lg-column justify-content-center px-5 py-2 px-lg-3 py-lg-0">
                    <Button text="Endurance" link="/better/Training/Endurance" />
                    <Text centered={false} text="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        " />
                </div>
            </div>
        </>
    );
}

export default Training;