import React  from "react";
import { Link , useNavigate } from "react-router-dom";
import './signup.css'
import NevBar from "./Navbar";
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseconfig/firebase'
import { useState } from "react";

function Login(){


    const initialFormValues = {
        email: "",
        pass: ""
    };

    const navigate = useNavigate()

    const [values, setValues] = useState(initialFormValues);
    const [errmsg, setErrMsg] = useState('');

    function handleButton(event) {
        event.preventDefault(); 
        
        console.log(values);
        if( !values.email ||  !values.pass ){
            setErrMsg('Fill all fields');
            setTimeout(() => {
                setErrMsg('');
            }, 5000);
            
            return ;
        }
        setErrMsg('');

        signInWithEmailAndPassword(auth , values.email , values.pass)
            .then((res) => {
                const user = res.user;

                navigate('/')
                console.log(user)
            })
            .catch((err) => {
                setErrMsg(err.message)
                console.log(err)
            })

        setValues(initialFormValues);
    }


    return (
        <div>
            <NevBar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
        <div className='signup-container' >
            <form className='signup-form'>
            <h1>Login </h1>

            
            <label>Email</label>
            <input type='email' 
            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
            placeholder='enter your email'/>

            <label>Password</label>
            <input type='password'
            onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))} 
            placeholder='enter your password'/>

            <button type='submit' onClick={handleButton}>Sign In</button>
            <p className="msg">{errmsg}</p>

            <div>
              <span>Don't have an account?</span>
              <Link to='/signup'>Sign up</Link>
            </div>
            </form>
            

            
        </div></div></div>
    )
}

export default Login;