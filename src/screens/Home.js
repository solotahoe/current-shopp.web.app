import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Banklogs from './banklogs';

import fire from '../fire';
import Login from './login';

function Home() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [hasAccount,setHassAccount] = useState(false);


  const clearInput = ()=>{
    setEmail("");
    setPassword("");
  }
  const clearErrors =()=>{
    setEmailError("");
    setPasswordError("");
  }


  const handleLogin =()=> {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(
      err => {
        switch(err.code){
          case 'auth/invalid-email':
          case "auth/user-disabled":
          case "auth/user-not-found":
           setEmailError(err.message);
           break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      }
    )
  }

  const handleSingUp= ()=> {
    clearErrors();
     fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(
      err => {
        switch(err.code){
          case 'auth/email-already-in-use':
          case "auth/invalid-email":
           setEmailError(err.message);
           break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      }
    )
  }

  const handleLogOut= ()=>{
    fire.auth().signOut();
  }

  const authListener = ()=>{
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInput()
        setUser(user)
      }else{
        setUser('');
      }
    })
  }

  useEffect(()=>{
   authListener();
  },[])

 
  return (
        <div className="app">
          {user ? (
         <Banklogs handleLogOut={handleLogOut}/>
          ) : (
    <Login
        email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSingUp={handleSingUp} 
        hasAccount={hasAccount} 
        setHassAccount={setHassAccount}
        emailError={emailError} 
        passwordError={passwordError}/>
          )}
      
        
        </div>
  );
}

export default Home;
