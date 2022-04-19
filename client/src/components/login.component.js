import React, { Component } from "react";

export default class Login extends Component {
    
    render() {
        return (
            <form>
                <h3> Login </h3>
                <input placeholder="Email..." onChange={(event) => {
                    setLoginEmail(event.target.value);
                    }}/>
                <input placeholder="Password..." onChange={(event) => {
                    setLoginPassword(event.target.value);
                    }}/>
                <button> Login </button>
            </form>
        );
    }
}