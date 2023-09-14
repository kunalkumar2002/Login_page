import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import './signup.css'
import NevBar from "./Navbar";
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { auth } from './firebaseconfig/firebase'

function Signup() {
    const initialFormValues = {
        name: "",
        email: "",
        Mobile: "",
        pass: ""
    };

    const navigate = useNavigate()

    const [values, setValues] = useState(initialFormValues);
    const [errmsg, setErrMsg] = useState('');

    function handleButton(event) {
        event.preventDefault(); 
        
        console.log(values);
        if( !values.name || !values.email ||  !values.pass ||  !values.Mobile){
            setErrMsg('Fill all fields');
            setTimeout(() => {
                setErrMsg('');
            }, 5000);
            
            return ;
        }
        setErrMsg('');

        createUserWithEmailAndPassword(auth , values.email , values.pass)
            .then(async(res) => {
                const user = res.user;
                await updateProfile(user , {
                    displayName: values.name,
                })
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
                        <p>Create Account</p>

                        <label>Your Name</label>
                        <input
                            onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                            type='text'
                            placeholder='enter your name'
                            value={values.name} // Set the value attribute
                        />

                        <label>Mobile Number</label>
                        <input
                            onChange={(e) => setValues((prev) => ({ ...prev, Mobile: e.target.value }))}
                            type='tel'
                            placeholder='mobile number'
                            value={values.Mobile} // Set the value attribute
                        />

                        <label>Email</label>
                        <input
                            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                            type='email'
                            placeholder='enter your email'
                            value={values.email} // Set the value attribute
                        />

                        <label>Password</label>
                        <input
                            onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))}
                            type='password'
                            placeholder='enter your password'
                            value={values.pass} // Set the value attribute
                        />

                        <button type='submit' onClick={handleButton}>Sign up</button>
                        <p className="msg">{errmsg}</p>

                        <div>
                            <span>Already have an account?</span>
                            <Link to='/login'>Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
