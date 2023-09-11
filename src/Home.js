import React from 'react'
import NevBar from './Navbar'
// import Signup from './signUp'


const Home = (props) => {
  return (
    <div>
      <NevBar />
      <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <h1>{ props.name ? `welcome - ${props.name}` : " Login Please" }</h1>
      </div>
      
    </div>
  )
}

export default Home
