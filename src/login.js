import React from "react";
import { Link } from "react-router-dom";
import './signup.css'
import NevBar from "./Navbar";
function Login(){
    return (
        <div>
            <NevBar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
        <div className='signup-container' >
            <form className='signup-form'>
            <h1>Login </h1>

            
            <label>Email</label>
            <input  
            type='email' placeholder='enter your email'/>

            <label>Password</label>
            <input 
            type='password' placeholder='enter your password'/>

            <button type='submit'>Sign In</button>
            <div>
              <span>Don't have an account?</span>
              <Link to='/signup'>Sign up</Link>
            </div>
            </form>
            

            
        </div></div></div>
    )
}

export default Login;