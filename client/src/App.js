import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import './App.css';
import { auth } from './firebase-config';
//import Login from "./components/login.component.js";
//import SignUp from "./components/signup.component.js";

export default function App() {
  
  const [data, setData] = React.useState(null);
  
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser)
    setUser(currentUser);    
  })

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  };

  React.useEffect(()=>{
    fetch("/auth")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, [])

  return (
    <div className='App'>
      <header className="App-header">
        <div>

          <p>{!data ? "Loading..." : data}</p>
          <h1> ToDo App</h1>

          <div className='Login'>          
          <h3> Login </h3>
            <input placeholder="Email..." onChange={(event) => {                
                setLoginEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                setLoginPassword(event.target.value);
                }}/>
            <button onClick={login}> Login </button>
          </div>

          <div className='Signup'>
          <h3> Sign Up </h3>
            <input placeholder="Email..." onChange={(event) => {
                setSignupEmail(event.target.value);
                }}/>
            <input placeholder="Password..." onChange={(event) => {
                setSignupPassword(event.target.value);
                }}/>
            <button onClick={signup}> Sign Up </button>
          </div>

          <div>
            <h4> User logged in: </h4>
            {user.email}
            <button onClick={logout}> Sign Out </button>
          </div>

        </div>
      </header>
    </div>
    )
  }