import React from 'react';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";

export default function App() {
  
  const [data, setData] = React.useState(null);
  
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const signup = async() => {

    const user = await createUserWithEmailAndPassword()

  }
  const login = async() => {}
  const logout = async() => {}

  React.useEffect(()=>{
    fetch("/auth")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className='App'>
      <header className="App-header">
        <div>
          <p>{!data ? "Loading..." : data}</p>
          <h1> ToDo App</h1>
          <Login></Login>
          <SignUp></SignUp>
        </div>
      </header>
      <footer>
          <h4> User logged in: </h4>
          <button>Sign Out</button>
      </footer>
    </div>
    );
  }