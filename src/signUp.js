
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
// import { createUserWithEmailAndPassword, validatePassword } from "firebase/auth";
// import { auth } from "./firebase/firebase";
import NevBar from "./Navbar";

function Signup(){

    const [vlaues , setValues] = useState({
        name : "",
        email : "",
        Mobile : "",
        pass : ""
    })

    const [errmsg , seterrMsg] = useState('')
    // const [submitdes , setSubmitDes] = useState(false)

    // function handleButton(){
    //     console.log(vlaues)
    //     if( !vlaues.name || !vlaues.email ||  !vlaues.pass ||  !vlaues.Mobile){
    //         seterrMsg('Fill all fields');
    //         return ;
    //     }
    //     seterrMsg('');

    //     setSubmitDes(true);

    //     createUserWithEmailAndPassword(auth , vlaues.email , vlaues.pass)
    //         .then((res) => {
    //             setSubmitDes(false)
    //             // console.log(res);
    //             const user = res.user;
    //             console.log(user)

    //         })
    //         .catch((err) => 
    //             {setSubmitDes(false)
    //                 seterrMsg(err.massage)
    //             console.log("error" , err.massage)});
    // }
    
   
    
    
    return (
        <div>
        <NevBar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
        <div className='signup-container' >
            <form className='signup-form'>
            <p>Create Account</p>

            <label>Your Name</label>
            <input onChange={(e)=>setValues((prev) => ({...prev , name : e.target.value}))} 
            type='text' placeholder='enter your name'/>

            <label>Mobile Number</label>
            <input onChange={(e)=>setValues((prev) => ({...prev , Mobile : e.target.value}))} 
            type='tel' placeholder='mobile number'/>

            <label>Email</label>
            <input onChange={(e)=>setValues((prev) => ({...prev , email : e.target.value}))} 
            type='email' placeholder='enter your email'/>

            <label>Password</label>
            <input onChange={(e)=>setValues((prev) => ({...prev , pass : e.target.value}))} 
            type='password' placeholder='enter your password'/>

            <button type='submit' >Sign up</button>
            <p className="msg">{errmsg}</p>

            <div>
              <span>Alrady have an account?</span>
              <Link to='/login'>Sign In</Link>
            </div>
            </form>
            

            
        </div></div></div>

     
    )
}

export default Signup;