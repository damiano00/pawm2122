import React, { Component } from "react";

const SignUp = (props) => {
    return (
        <form>
            <h3> Sign Up </h3>
            <input placeholder="Email..." onChange={(event) => {
                props.setSignupEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                props.setSignupPassword(event.target.value);
                }}/>
            <button onClick={props.signup()}> Sign Up </button>
        </form>
    );
}   

export default SignUp;