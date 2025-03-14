import React, {useRef} from "react";
import { auth } from "./firebase";

import "./SignupScreen.css";

function SignupScreen(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    // Handling the Register Click
    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);

        });
    };

    const signIn = (e) =>{
        
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);

        });
    };

    return(

        <div className="signupScreen">    

                            <form>
                                    <h1>Sign In</h1>
                    
                                    <input ref = {emailRef} placeholder = "Email" type = "email" required/>
                                    <input ref = {passwordRef} placeholder="Password" type = "password" required/>
                    
                                    <button type = "submit" onClick={signIn}>Sign In</button>
            
                                    <h4>
                                        <span className = "signUp_gray">New to Netflix?</span>
                                        <span className = "signUp_link" onClick={register}>Register now.</span>
                                    </h4>

                            </form>

                
                        </div>
            
    );
}

export default SignupScreen;

        
        

