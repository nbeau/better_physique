import Header from "../components/Header";
import Text from "../components/Text";
//import "../styles/Contact.css";

function Contact() {
    return (
        <>
            <Header heading="Contact Us" />
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
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
                        <br/>
                        <Text centered={true} text="
                        If you have any questions or would like to speak directly 
                        with a professional for advice, you can call us or send us an email
                        " />
                        <br/>
                        <div className="row justify-content-evenly">
                            <div className="col-auto justify-content-center">
                                <i className="fa-solid fa-phone" />
                                &nbsp;&nbsp;(613) 999-9999
                            </div>
                            <div className="col-auto justify-content-center">
                                <i className="fa-solid fa-envelope" />
                                &nbsp;&nbsp;better@physique.com
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;