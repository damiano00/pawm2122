import React from "react";

function Login(props){
    return (
        <div>            
            <h3> Login </h3>
            <input placeholder="Email..." onChange={(event) => {                
                props.setLoginEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                props.setLoginPassword(event.target.value);
                }}/>
            <button onClick={props.setlogin}> Login </button>
        </div>
    )
}

export default Login;