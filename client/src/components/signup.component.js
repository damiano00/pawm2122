import React, { Component } from "react";

export default class SignUp extends Component {

    render() {
        return (
            <form>
                <h3> Sign Up </h3>
                <input placeholder="Email..." onChange={(event) => {
                    setSignupEmail(event.target.value);
                    }}/>
                <input placeholder="Password..." onChange={(event) => {
                    setSignupPassword(event.target.value);
                    }}/>
                <button> Sign Up </button>
            </form>
        );
    }
}