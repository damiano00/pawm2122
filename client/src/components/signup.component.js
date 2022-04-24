import React from "react";

function SignUp(props){
    return (
        <div>
            <h3> Sign Up </h3>
            <input placeholder="Email..." onChange={(event) => {
                props.setSignupEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                props.setSignupPassword(event.target.value);
                }}/>
            <button onClick={props.setsignup}> Sign Up </button>
        </div>
    )
}   

export default SignUp;