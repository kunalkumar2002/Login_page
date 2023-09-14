import "./App.css";
import {Routes as Switch , Route } from "react-router-dom"


import Home from './Home'
import Login from './login'
import Signup from "./signUp";
import { useEffect, useState } from "react";
import { auth } from "./firebaseconfig/firebase";

  
function App() {
  
  const [username , setUserName] = useState('')
  useEffect(() =>{
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName("")
      }
      // console.log(user);
    });
  }, [] )
  return (
    <div className="App">
     <Switch>
     <Route exact path="/" element={<Home name={username} />} />


      <Route exact path='/signUp' Component={Signup} />
      <Route exact path='/login' Component={Login} />
     </Switch>

    </div>
  );
}

export default App;
