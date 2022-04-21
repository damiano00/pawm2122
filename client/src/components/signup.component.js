import React, { Component } from "react";
import App from "../App.js";

export default class SignUp extends Component {

    render(){
        return (
            <form>
                <h3> Sign Up </h3>
                <input placeholder="Email..." onChange={(event) => {
                    App.setSignupEmail(event.target.value);
                    }}/>
                <input placeholder="Password..." onChange={(event) => {
                    App.setSignupPassword(event.target.value);
                    }}/>
                <button> Sign Up </button>
            </form>
        );
    }
}