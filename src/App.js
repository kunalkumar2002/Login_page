import "./App.css";
import {Routes as Switch , Route } from "react-router-dom"

import Home from './Home'
import Login from './login'
import Signup from "./signUp";
  
function App() {
 

  return (
    <div className="App">
     <Switch>
      <Route exact path='/' Component={Home} />
      <Route exact path='/signUp' Component={Signup} />
      <Route exact path='/login' Component={Login} />
     </Switch>

    </div>
  );
}

export default App;
