import React, { Component } from "react";

const Login = (props) => {

    return (
        <form>            
            <h3> Login </h3>
            <input placeholder="Email..." onChange={(event) => {                
                props.setLoginEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                props.setLoginPassword(event.target.value);
                }}/>
            <button onClick={props.login()}> Login </button>
        </form>
    );
}

export default Login;