import React, { Component } from "react";
import App from "../App.js";

export default class Login extends Component {
    
    render() {
        return (
            <form>            
                <h3> Login </h3>
                <input placeholder="Email..." onChange={(event) => {                
                    App.setLoginEmail(event.target.value);
                    }}/>
                <input placeholder="Password..." onChange={(event) => {
                    App.setLoginPassword(event.target.value);
                    }}/>
                <button> Login </button>
            </form>
        );
    }
}