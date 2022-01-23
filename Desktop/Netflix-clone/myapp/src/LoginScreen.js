import React, {useState} from "react";

import Nav from "./Nav";
import SignupScreen from "./SignupScreen";

import "./LoginScreen.css";

function LoginScreen(){

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">

            <div className = "loginScreen_background">
                <img src="img/logo.png" alt="background" className = "loginScreen_logo"/>
                <button className = "creator_button">The creator</button>
                <button onClick = {() => setSignIn(true)} className = "loginScreen_button">Sign In</button>

                <div className = "loginScreen_gradient"></div>
            </div>


            <div className = "loginScreen_body">

            {signIn ? (
                <SignupScreen />

            ) : (
                <>
                    <h1>Unlimited movies, TV programs
                        and more.</h1>

                    <h2>Watch anywhere. Cancel at any time. </h2>
                    <h3>Ready to start watching? Enter your email 
                        address to create or reactivate an account</h3>

                    <div className = "loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address" required className = "loginScreen_email"/>
                            <button onClick={() => setSignIn(true)} className = "loginScreen_getStarted">GET STARTED</button>
                        </form>
                        
                    </div>

                </>
            )}
                </div>

    </div>
    )
}

export default LoginScreen;
