import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import './App.css';
import { auth } from './firebase-config';
import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  function changeSignUpEmail(e){setSignupEmail(e);}
  function changeSignUpPassword(e){setSignupPassword(e);}
  function changeLoginEmail(e){setLoginEmail(e);}
  function changeLoginPassword(e){setLoginPassword(e);}
  
  const [user, setUser] = useState({});
  
  const navigate = useNavigate();
  
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){ setUser(currentUser);}  
  })
  
  const signup = async () =>  {
    console.log('hey hai schiacciato il bottone signup')
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      console.log(user);
    } catch (error) {
      console.log(signupEmail)
      console.log(signupPassword)
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
      navigate('/pages/Home');
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    auth.signOut().then(function() {
      setUser("")
    }).catch(function(error) {
      // An error happened.
    });
  };

  return (
    <div className='App'>
      <header className="App-header">
        <div>

          <h1> ToDo App</h1>

          <Login
          setLoginEmail={changeLoginEmail}
          setLoginPassword={changeLoginPassword}
          setlogin = {login}
          ></Login>

          <SignUp
          setSignupEmail={changeSignUpEmail}
          setSignupPassword={changeSignUpPassword}
          setsignup = {signup}
          ></SignUp>

          <div>
            <h3> User logged in:</h3>
            {user.email}
            <button onClick={logout}> Sign Out </button>
          </div>

        </div>
      </header>
    </div>
    )
  }