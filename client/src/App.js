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
import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";

export default function App(props) {

  const [data, setData] = React.useState(null);
  
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function changeSignUpEmail(e){setSignupEmail(e);}
  function changeSignUpPassword(e){setSignupPassword(e);}
  function changeLoginEmail(e){setLoginEmail(e);}
  function changeLoginPassword(e){setLoginPassword(e);}

  function callLogin(){login()}
  function callSignUp(){signup()}

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

          <Login
          setLoginEmail={changeLoginEmail}
          setLoginPassword={changeLoginPassword}
          login={callLogin}
          ></Login>

          <SignUp
          setSignupEmail={changeSignUpEmail}
          setSignupPassword={changeSignUpPassword}
          signup={callSignUp}
          ></SignUp>

          <div>
            <h4> User logged in:</h4>
            {user.email}
            <button onClick={logout}> Sign Out </button>
          </div>

        </div>
      </header>
    </div>
    )
  }